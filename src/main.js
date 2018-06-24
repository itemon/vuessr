import { createApp, router } from './baseapp'

const vm = createApp()
router.onReady(() => {
  vm.$mount('#app')
})
