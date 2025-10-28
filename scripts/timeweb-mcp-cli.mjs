#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const ENV_FILE = path.join(PROJECT_ROOT, ".env.timeweb");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }
  const content = fs.readFileSync(filePath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }
    const eqIndex = line.indexOf("=");
    if (eqIndex === -1) {
      continue;
    }
    const key = line.slice(0, eqIndex).trim();
    if (!key || key in process.env) {
      continue;
    }
    let value = line.slice(eqIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

async function main() {
  loadEnvFile(ENV_FILE);

  const [toolName, argsJson] = process.argv.slice(2);
  if (!toolName) {
    console.error("Usage: npm run timeweb:mcp:call <tool-name> [json-args]");
    process.exit(1);
  }

  let toolArgs = {};
  if (argsJson) {
    try {
      toolArgs = JSON.parse(argsJson);
      if (typeof toolArgs !== "object" || toolArgs === null || Array.isArray(toolArgs)) {
        throw new Error("JSON arguments must be an object");
      }
    } catch (error) {
      console.error("Failed to parse JSON arguments:", error instanceof Error ? error.message : String(error));
      process.exit(1);
    }
  }

  if (!process.env.TIMEWEB_TOKEN) {
    console.error("TIMEWEB_TOKEN is not set. Configure .env.timeweb or export the variable before running this command.");
    process.exit(1);
  }

  const serverBinary = path.resolve(PROJECT_ROOT, "node_modules/.bin/timeweb-mcp-server");

  const transport = new StdioClientTransport({
    command: serverBinary,
    env: { TIMEWEB_TOKEN: process.env.TIMEWEB_TOKEN },
    stderr: "pipe",
  });

  transport.stderr?.on("data", (chunk) => {
    process.stderr.write(`[server stderr] ${chunk}`);
  });

  const client = new Client(
    { name: "yourshapes-cli", version: "0.1.0" },
    {
      capabilities: {
        tools: {},
        resources: {},
        prompts: {},
      },
    }
  );

  try {
    await client.connect(transport);
    const result = await client.callTool({ name: toolName, arguments: toolArgs });
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await client.close().catch(() => {});
  }
}

main().catch((error) => {
  console.error("Error while executing MCP tool:", error instanceof Error ? error.message : String(error));
  process.exit(1);
});
