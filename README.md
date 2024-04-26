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

See https://nuxt-env-repro.nuxt.dev/api/env

Locally, we have on http://localhost:3000/api/env

```json
{
  "runtimeConfig().hello": "world",
  "runtimeConfig(event).hello": "world",
  "i.meta.env.NUXT_HELLO": "world",
  "process.env.NUXT_HELLO": "world"
}
```

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
