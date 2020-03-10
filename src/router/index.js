import Vue from 'vue'
import VueRouter from 'vue-router'
import Router180ww from './Router180ww.js'
import Router600wa from './Router600wa.js'
import RouterSchool from './RouterSchool.js'
import RouterContact from './RouterContact.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: "",
        redirect: '/home'
      },
      {
        path: "/home",
        name: "home",
        component: () => import('../views/Home.vue'),
      },
      Router180ww, Router600wa, RouterSchool, RouterContact
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes
})

export default router
