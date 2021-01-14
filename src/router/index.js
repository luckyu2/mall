import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const Home = () =>import('views/home/Home')
const Category = () =>import('views/Category/Category')
const Profile = () =>import('views/profile/Profile')
const Cart = () =>import('views/Cart/Cart')

Vue.use(VueRouter)

const routes = [
  {
    path:'' ,
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/profile',
    component:Profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
