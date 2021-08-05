import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AboutSvg: () => import('../../components/AboutSvg.vue' /* webpackChunkName: "components/about-svg" */).then(c => wrapFunctional(c.default || c)),
  CodePenSvg: () => import('../../components/CodePenSvg.vue' /* webpackChunkName: "components/code-pen-svg" */).then(c => wrapFunctional(c.default || c)),
  ContactSvg: () => import('../../components/ContactSvg.vue' /* webpackChunkName: "components/contact-svg" */).then(c => wrapFunctional(c.default || c)),
  DevSvg: () => import('../../components/DevSvg.vue' /* webpackChunkName: "components/dev-svg" */).then(c => wrapFunctional(c.default || c)),
  DownloadSvg: () => import('../../components/DownloadSvg.vue' /* webpackChunkName: "components/download-svg" */).then(c => wrapFunctional(c.default || c)),
  GitHubSvg: () => import('../../components/GitHubSvg.vue' /* webpackChunkName: "components/git-hub-svg" */).then(c => wrapFunctional(c.default || c)),
  LinkedInSVG: () => import('../../components/LinkedInSVG.vue' /* webpackChunkName: "components/linked-in-s-v-g" */).then(c => wrapFunctional(c.default || c)),
  NuxtLogo: () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  PostCard: () => import('../../components/PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c)),
  ResumeSvg: () => import('../../components/ResumeSvg.vue' /* webpackChunkName: "components/resume-svg" */).then(c => wrapFunctional(c.default || c)),
  TwitterSvg: () => import('../../components/TwitterSvg.vue' /* webpackChunkName: "components/twitter-svg" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
