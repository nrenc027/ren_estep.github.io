import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AboutSvg: () => import('../../components/AboutSvg.vue' /* webpackChunkName: "components/about-svg" */).then(c => wrapFunctional(c.default || c)),
  ContactSvg: () => import('../../components/ContactSvg.vue' /* webpackChunkName: "components/contact-svg" */).then(c => wrapFunctional(c.default || c)),
  NuxtLogo: () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  PostCard: () => import('../../components/PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c)),
  ResumeSvg: () => import('../../components/ResumeSvg.vue' /* webpackChunkName: "components/resume-svg" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
