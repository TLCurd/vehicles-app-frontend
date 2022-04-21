import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VehiclesIndex from '../views/VehiclesIndex.vue'
import VehiclesNew from '../views/VehiclesNew.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vehicles',
    name: 'vehicles-index',
    component: VehiclesIndex
  },
  {
    path: '/vehicles/new',
    name: 'vehicles-new',
    component: VehiclesNew
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
