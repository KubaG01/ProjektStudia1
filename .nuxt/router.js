import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2b81241c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _22dfbf6e = () => interopDefault(import('..\\pages\\applications.vue' /* webpackChunkName: "pages/applications" */))
const _127d815a = () => interopDefault(import('..\\pages\\servers.vue' /* webpackChunkName: "pages/servers" */))
const _6776b8d8 = () => interopDefault(import('..\\pages\\tasks.vue' /* webpackChunkName: "pages/tasks" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _2b81241c,
    name: "index___en"
  }, {
    path: "/pl",
    component: _2b81241c,
    name: "index___pl"
  }, {
    path: "/en/applications",
    component: _22dfbf6e,
    name: "applications___en"
  }, {
    path: "/en/servers",
    component: _127d815a,
    name: "servers___en"
  }, {
    path: "/en/tasks",
    component: _6776b8d8,
    name: "tasks___en"
  }, {
    path: "/pl/applications",
    component: _22dfbf6e,
    name: "applications___pl"
  }, {
    path: "/pl/servers",
    component: _127d815a,
    name: "servers___pl"
  }, {
    path: "/pl/tasks",
    component: _6776b8d8,
    name: "tasks___pl"
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
