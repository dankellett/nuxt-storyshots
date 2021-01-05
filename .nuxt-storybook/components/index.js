export { default as Button } from '../..\\components\\Button.vue'
export { default as Link } from '../..\\components\\Link.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

export const LazyButton = import('../..\\components\\Button.vue' /* webpackChunkName: "components_Button" */).then(c => c.default || c)
export const LazyLink = import('../..\\components\\Link.vue' /* webpackChunkName: "components_Link" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo" */).then(c => c.default || c)
