import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JokeView from '../components/JokeView.vue'
import PostApi from '../components/PostApi.vue'
import practice from '../components/practice.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/joke',
    name:'joke',
    component: JokeView
  },
  {
    path: '/postapi',
    name:'postapi',
    component: PostApi
  },
  {
    path:'/practice',
    name:'practice',
    component: practice
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
