# Nuxt Minimal Reproduction for Env


```ts
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    hello: ''
  }
})
```

```ts
// server/api/env.ts
export default eventHandler(event => {
  const runtimeConfig = useRuntimeConfig(event)

  return {
    'runtimeConfig().hello': useRuntimeConfig().hello,
    'runtimeConfig(event).hello': runtimeConfig.hello,
    'i.meta.env.NUXT_HELLO': import.meta.env.NUXT_HELLO,
    'process.env.NUXT_HELLO': process.env.NUXT_HELLO
  }
})
```

See https://env-repro.nuxt.dev/api/env

## Setup

Make sure to install the dependencies:

```bash
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```
