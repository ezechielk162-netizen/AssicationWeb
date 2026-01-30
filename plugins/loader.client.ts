export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:start', () => {
      document.documentElement.classList.add('page-loading')
    })
  
    nuxtApp.hook('page:finish', () => {
      document.documentElement.classList.remove('page-loading')
    })
  })
  