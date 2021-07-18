import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ed4576e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _24eeba5c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _a368b7be = () => interopDefault(import('../pages/resume.vue' /* webpackChunkName: "pages/resume" */))
const _104daf0e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1ed4576e,
    name: "about"
  }, {
    path: "/contact",
    component: _24eeba5c,
    name: "contact"
  }, {
    path: "/resume",
    component: _a368b7be,
    name: "resume"
  }, {
    path: "/",
    component: _104daf0e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
