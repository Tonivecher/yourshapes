# Timeweb MCP Server Setup

This repository includes a helper script for launching the experimental [Timeweb MCP server](https://github.com/timeweb-cloud/mcp-server) that automates deployments to Timeweb Cloud via the Model Context Protocol.

## Prerequisites

- Node.js 18 or newer (provides the `npx` command used to launch the server).
- A valid Timeweb Cloud API token with MCP access enabled.

## Configuration

1. Copy the provided environment template:
   ```bash
   cp .env.timeweb.example .env.timeweb
   ```
2. Replace `your-timeweb-api-token` in `.env.timeweb` with your actual Timeweb API token.

> The `.env.timeweb` file is ignored by Git to prevent accidental leaks of credentials.

## Usage

Start the server from the repository root:

```bash
npm run timeweb:mcp
```

The helper script will load the token from `.env.timeweb` (if present) or fall back to the `TIMEWEB_TOKEN` environment variable. The server runs in the foreground, so keep the terminal session open while you use MCP clients such as Cursor or VS Code.

To stop the server, interrupt the process with `Ctrl+C`.

## Running a Tool from the CLI

After configuring your token you can invoke any exposed MCP tool without a GUI client:

```bash
npm run timeweb:mcp:call get_allowed_presets
```

Pass a JSON object as the second argument to provide tool-specific parameters:

```bash
npm run timeweb:mcp:call create_timeweb_app '{"repositoryUrl":"https://github.com/org/repo"}'
```

The script automatically reads `.env.timeweb` (if present) and streams server diagnostics to stderr for easier debugging.
