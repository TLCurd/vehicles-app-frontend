import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VehiclesIndex from '../views/VehiclesIndex.vue'
import VehiclesNew from '../views/VehiclesNew.vue'
import VehiclesShow from '../views/VehiclesShow.vue'
import VehiclesEdit from '../views/VehiclesEdit.vue'
import SignupView from '../views/SignupView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name:'signup-view',
    component: SignupView
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
    path: '/vehicles/:id',
    name: 'vehicles-show',
    component: VehiclesShow
  },
  {
    path: '/vehicles/:id/edit',
    name: 'vehicles-edit',
    component: VehiclesEdit
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
