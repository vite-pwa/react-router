<p align='center'>
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/vite-pwa/.github/main/react-router-hero-dark.svg" />
        <img src="https://raw.githubusercontent.com/vite-pwa/.github/main/react-router-hero.svg" alt="@vite-pwa/react-router - Zero-config PWA for React Router">
    </picture>
</p>

<p align='center'>
<a href='https://npmx.dev/package/@vite-pwa/react-router' target="__blank">
<img src='https://img.shields.io/npm/v/@vite-pwa/react-router?color=33A6B8&label=' alt="NPM version">
</a>
<a href="https://npmx.dev/package/@vite-pwa/react-router" target="__blank">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@vite-pwa/react-router?color=476582&label=">
</a>
<a href="https://unplugin-pwa.netlify.app/frameworks/react-router" target="__blank">
    <img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20guides&color=2e859c" alt="Docs & Guides">
</a>
<br>
<a href="https://github.com/vite-pwa/react-router" target="__blank">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/vite-pwa/vitepress?style=social">
</a>
</p>

<br>

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg" alt="Anthony Fu SVG sponsors image"/>
  </a>
</p>

## 🚀 Features

- 📖 [**Documentation & guides**](https://unplugin-pwa.netlify.app/)
- 👌 **Zero-Config**: sensible built-in default configs for common use cases
- 🔩 **Extensible**: expose the full ability to customize the behavior of the plugin
- 🦾 **Type Strong**: written in [TypeScript](https://www.typescriptlang.org/)
- 🔌 **Offline Support**: generate service worker with offline support (via Workbox)
- ⚡ **Fully tree shakable**: client virtual modules are strictly optimized for Dead Code Elimination.
- 📄 **Web Manifest**: auto-inject Web App Manifest and PWA assets seamlessly.
- 💬 **Prompt for new content**: built-in support for Vanilla JavaScript, Vue 3, React, Svelte, SolidJS and Preact
- ⚙️ **Stale-while-revalidate**: automatic reload when new content is available
- ✨ **Static assets handling**: configure static assets for offline support
- 🐞 **Development Support**: debug your custom service worker logic as you develop your application
- 🔍 **Inspector**: visually inspect your resolved configuration, web manifest and service worker during development, via middleware or [DevFrame](https://github.com/devframes/devframe)
- 🧩 **Modular**: use the ready-to-use plugins or compose your own integration from the building blocks in `@unplugin-pwa/core` and `@unplugin-pwa/vite`
- 📦 **Universal Bundlers**: native integration with Vite, Rolldown, Webpack (WIP), Rspack (WIP), and Rsbuild (WIP).
- 🛠️ **Meta-Frameworks**: seamless integration with [îles](https://github.com/ElMassimo/iles), [SvelteKit](https://github.com/sveltejs/kit), [VitePress](https://github.com/vuejs/vitepress), [Astro](https://github.com/withastro/astro), [Nuxt 3/4/5](https://github.com/nuxt/nuxt), [React Router](https://github.com/remix-run/react-router/), [TanStack](https://github.com/TanStack) and [Next](https://github.com/vercel/next.js/) (WIP).
- 💥 **PWA Assets Generator**: generate all the PWA assets from a single command and a single source image
- 🚀 **PWA Assets Integration**: serving, generating and injecting PWA Assets on the fly in your application

## 📦 Install

```bash
npm i @vite-pwa/react-router -D

# yarn
yarn add @vite-pwa/react-router -D

# pnpm
pnpm add @vite-pwa/react-router -D
```

## 🦄 Usage

You will need to provide your React Router plugin to the `ReactRouterPWAPlugin`:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { ReactRouterPWAPlugin } from '@vite-pwa/react-router'

const reactRouterPlugin = reactRouter()

export default defineConfig({
  plugins: [
	reactRouterPlugin,
	ReactRouterPWAPlugin(
	  reactRouterPlugin,
      {
        /* PWA options */
      }
	)
  ]
})
```

then add the `ReactRouterPWAPreset` to your React Router configuration:

```ts
// react-router.config.ts
import type { Config } from '@react-router/dev/config'
import { ReactRouterPWAPreset } from '@vite-pwa/react-router/preset'

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	presets: [ReactRouterPWAPreset()]
} satisfies Config
```

Read the [📖 documentation](https://unplugin-pwa.netlify.app/frameworks/react-router) for a complete guide on how to configure and use
this plugin.

## 👀 Full config

Check out the type declaration [src/types.ts](https://github.com/vite-pwa/react-router/blob/master/src/types.ts) and the following links for more details.

- [Web app manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Vite PWA Workbox](https://unplugin-pwa.netlify.app/vite-pwa-workbox/)

## 📄 License

[MIT](./LICENSE) License &copy; 2026-PRESENT [Anthony Fu](https://github.com/antfu)
