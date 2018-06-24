/**
 * common code shared between client and sever
 */
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

Vue.config.productionTip = false

const router = createRouter()

const createApp = () => {
  return new Vue({
    router,
    components: { App },
    template: '<App/>'
  })
}

export {
  router,
  createApp
}
