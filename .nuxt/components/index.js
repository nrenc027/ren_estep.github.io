import { wrapFunctional } from './utils'

export { default as AboutSvg } from '../../components/AboutSvg.vue'
export { default as ContactSvg } from '../../components/ContactSvg.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as PostCard } from '../../components/PostCard.vue'
export { default as ResumeSvg } from '../../components/ResumeSvg.vue'

export const LazyAboutSvg = import('../../components/AboutSvg.vue' /* webpackChunkName: "components/about-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyContactSvg = import('../../components/ContactSvg.vue' /* webpackChunkName: "components/contact-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPostCard = import('../../components/PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c))
export const LazyResumeSvg = import('../../components/ResumeSvg.vue' /* webpackChunkName: "components/resume-svg" */).then(c => wrapFunctional(c.default || c))
