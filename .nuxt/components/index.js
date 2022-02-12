export { default as AboutSvg } from '../../components/AboutSvg.vue'
export { default as CodePenSvg } from '../../components/CodePenSvg.vue'
export { default as ContactSvg } from '../../components/ContactSvg.vue'
export { default as DevSvg } from '../../components/DevSvg.vue'
export { default as DownloadSvg } from '../../components/DownloadSvg.vue'
export { default as GitHubSvg } from '../../components/GitHubSvg.vue'
export { default as JobDeets } from '../../components/JobDeets.vue'
export { default as LinkedInSVG } from '../../components/LinkedInSVG.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as PostCard } from '../../components/PostCard.vue'
export { default as ResumeSvg } from '../../components/ResumeSvg.vue'
export { default as TwitterSvg } from '../../components/TwitterSvg.vue'

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
