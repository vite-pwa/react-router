import { defineConfig } from 'taze'

export default defineConfig({
  recursive: true,
  write: true,
  includeLocked: true,
  maturityPeriod: 7,
  peer: false,
  mode: 'minor',
  retry: 2,
  exclude: [
    'taze',
    'node',
  ],
  depFields: {
    packageManager: false,
  },
})
