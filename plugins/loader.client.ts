export default defineNuxtPlugin((nuxtApp) => {
  const showLoader = () => {
    document.body.classList.add('page-loading')
  }

  const hideLoader = () => {
    document.documentElement.classList.remove('page-loading')
  }

  // Quand Nuxt démarre une navigation normale
  nuxtApp.hook('page:start', () => {
    showLoader()
  })

  nuxtApp.hook('page:finish', () => {
    hideLoader()
  })

  // Pour détecter le bouton retour / forward (bfcache)
  window.addEventListener('pageshow', (event: PageTransitionEvent) => {
    if (event.persisted) {
      console.log("yeahhhhhhh")
      // Page restaurée depuis le cache, on affiche le loader puis on le cache rapidement
      showLoader()
      setTimeout(() => hideLoader(), 100) // 100ms juste pour la transition
    }
  })

  // Pour détecter un vrai rechargement de page
  window.addEventListener('beforeunload', () => {    
    showLoader()
  })

  // Watch la route côté client pour debug
  const route = useRoute()
  watch(
    () => route.fullPath,
    (newPath, oldPath) => {
      console.log('Route change:', oldPath, '➡', newPath)
    }
  )
})
