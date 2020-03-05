import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('../views/Notes.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter(to, from, next) {
      // check vuex store //
      if (store.getters.isLogggedIn) {
        next()
      } else {
        next({
          name: "Home" // back to safety route //
        });
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
