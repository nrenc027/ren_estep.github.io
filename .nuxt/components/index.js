import { wrapFunctional } from './utils'

export { default as AboutSvg } from '../../components/AboutSvg.vue'
export { default as CodePenSvg } from '../../components/CodePenSvg.vue'
export { default as ContactSvg } from '../../components/ContactSvg.vue'
export { default as DevSvg } from '../../components/DevSvg.vue'
export { default as DownloadSvg } from '../../components/DownloadSvg.vue'
export { default as GitHubSvg } from '../../components/GitHubSvg.vue'
export { default as LinkedInSVG } from '../../components/LinkedInSVG.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as PostCard } from '../../components/PostCard.vue'
export { default as ResumeSvg } from '../../components/ResumeSvg.vue'
export { default as TwitterSvg } from '../../components/TwitterSvg.vue'

export const LazyAboutSvg = import('../../components/AboutSvg.vue' /* webpackChunkName: "components/about-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyCodePenSvg = import('../../components/CodePenSvg.vue' /* webpackChunkName: "components/code-pen-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyContactSvg = import('../../components/ContactSvg.vue' /* webpackChunkName: "components/contact-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyDevSvg = import('../../components/DevSvg.vue' /* webpackChunkName: "components/dev-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyDownloadSvg = import('../../components/DownloadSvg.vue' /* webpackChunkName: "components/download-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyGitHubSvg = import('../../components/GitHubSvg.vue' /* webpackChunkName: "components/git-hub-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyLinkedInSVG = import('../../components/LinkedInSVG.vue' /* webpackChunkName: "components/linked-in-s-v-g" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPostCard = import('../../components/PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c))
export const LazyResumeSvg = import('../../components/ResumeSvg.vue' /* webpackChunkName: "components/resume-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyTwitterSvg = import('../../components/TwitterSvg.vue' /* webpackChunkName: "components/twitter-svg" */).then(c => wrapFunctional(c.default || c))
