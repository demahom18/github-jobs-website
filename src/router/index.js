import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobdetails/:id',
    name: 'JobDetail',
    component: () => import(/* webpackChunkName: "job" */ '../views/JobDetail.vue'),
    props: {
      id: true,
      publishTime: true
    }
  }
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { left: 0, top: 0 }
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

export default router
