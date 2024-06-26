export default eventHandler(event => {
  const runtimeConfig = useRuntimeConfig(event)

  console.log('i.meta.env.NUXT_HELLO: ' + import.meta.env.NUXT_HELLO)

  return {
    'runtimeConfig().hello': useRuntimeConfig().hello,
    'runtimeConfig(event).hello': runtimeConfig.hello,
    'i.meta.env.NUXT_HELLO': import.meta.env.NUXT_HELLO,
    'process.env.NUXT_HELLO': process.env.NUXT_HELLO
  }
})