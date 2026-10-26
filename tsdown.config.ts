import { fileURLToPath } from 'node:url'
import { defineConfig } from 'tsdown'

const cwd = fileURLToPath(new URL('.', import.meta.url))

export async function cleanupDistFiles(patterns: string | string[]) {
  const [fs, path] = await Promise.all([
    import('node:fs/promises'),
    import('node:path'),
  ])
  const dir = fs.glob(patterns, {
    withFileTypes: true,
    cwd: path.resolve(cwd, 'dist'),
  })

  for await (const file of dir) {
    await fs.rm(path.resolve(file.parentPath, file.name), { force: true })
  }
}

export async function cleanupJSTypes() {
  await cleanupDistFiles(['**/types.{js,mjs}'])
}

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/config.ts',
    'src/create-pwa-context.ts',
    'src/types.ts',
    'src/preset.ts',
    {
      'plugins/node/*': ['./src/plugins/node/*'],
      'plugins/runtime/*': ['./src/plugins/runtime/*'],
    },
    {
      components: './src/components/index.ts',
    },
  ],
  platform: 'node',
  dts: true,
  attw: {
    level: 'error',
    profile: 'esm-only',
  },
  publint: true,
  deps: {
    neverBundle: [
      '@react-router/dev',
      '@react-router/dev/config',
      '@react-router/dev/routes',
      'react',
      'react-jsx-runtime',
      'react-dom',
      'vite',
      'rolldown',
      'magicast',
      '@unplugin-pwa/vite',
      '@unplugin-pwa/core',
      '@vite-pwa/workbox-window',
      '@vite-pwa/workbox-build',
      'virtual:pwa-info',
      'virtual:pwa-assets/head',
    ],
  },
  hooks: {
    'build:done': async () => {
      await cleanupJSTypes()
    },
  },
})
