import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const createRouter = () => {
  return new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: () => import('@/components/HelloWorld')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/components/About')
      }
    ]
  })
}

export {
  createRouter
}
