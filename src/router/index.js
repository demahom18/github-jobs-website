import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobDetail from '../views/JobDetail.vue'

function jobDetailProps (route) {
  return {
    id: route.params.id,
    publishTime: route.params.publishTime,
    companyUrl: route.params.companyUrl
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobdetails/:id',
    name: 'JobDetail',
    component: JobDetail,
    props: jobDetailProps
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
