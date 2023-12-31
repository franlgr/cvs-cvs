import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'
// import AboutView from '../views/AboutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Profile
  },
  // {
  //   path: '/inicio',
  //   name: 'about',
  //   component: AboutView
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: function () {
  //   //   return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   // }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
