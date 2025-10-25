import { mkdir, readdir, writeFile } from 'bun:fs/promises';
import { dirname, extname, join } from 'bun:path';

const ROOT = process.cwd();
const PUBLIC_PROJECTS_DIR = join(ROOT, 'apps/website/public/projects');
const OUTPUT_PATH = join(ROOT, 'apps/website/src/data/projects.ts');

const SUPPORTED_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.avif',
]);

type ProjectEntry = {
  src: string;
  title: string;
  description: string;
};

const main = async () => {
  const files = await readdir(PUBLIC_PROJECTS_DIR);

  const projects: ProjectEntry[] = files
    .filter((file) => SUPPORTED_EXTENSIONS.has(extname(file).toLowerCase()))
    .sort()
    .map((file, index) => ({
      src: `/projects/${file}`,
      title: `Project ${index + 1}`,
      description: 'Добавь описание этого проекта',
    }));

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });

  const fileContents = `export const projects = ${JSON.stringify(
    projects,
    null,
    2,
  )} as const;\n`;

  await writeFile(OUTPUT_PATH, fileContents);
  console.info(`Generated ${projects.length} project entries in ${OUTPUT_PATH}`);
};

void main();
