export const AboutSvg = () => import('../../components/AboutSvg.vue' /* webpackChunkName: "components/about-svg" */).then(c => wrapFunctional(c.default || c))
export const CodePenSvg = () => import('../../components/CodePenSvg.vue' /* webpackChunkName: "components/code-pen-svg" */).then(c => wrapFunctional(c.default || c))
export const ContactSvg = () => import('../../components/ContactSvg.vue' /* webpackChunkName: "components/contact-svg" */).then(c => wrapFunctional(c.default || c))
export const DevSvg = () => import('../../components/DevSvg.vue' /* webpackChunkName: "components/dev-svg" */).then(c => wrapFunctional(c.default || c))
export const DownloadSvg = () => import('../../components/DownloadSvg.vue' /* webpackChunkName: "components/download-svg" */).then(c => wrapFunctional(c.default || c))
export const GitHubSvg = () => import('../../components/GitHubSvg.vue' /* webpackChunkName: "components/git-hub-svg" */).then(c => wrapFunctional(c.default || c))
export const JobDeets = () => import('../../components/JobDeets.vue' /* webpackChunkName: "components/job-deets" */).then(c => wrapFunctional(c.default || c))
export const LinkedInSVG = () => import('../../components/LinkedInSVG.vue' /* webpackChunkName: "components/linked-in-s-v-g" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const PostCard = () => import('../../components/PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c))
export const ResumeSvg = () => import('../../components/ResumeSvg.vue' /* webpackChunkName: "components/resume-svg" */).then(c => wrapFunctional(c.default || c))
export const TwitterSvg = () => import('../../components/TwitterSvg.vue' /* webpackChunkName: "components/twitter-svg" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
