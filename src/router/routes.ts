import { createRouter, createWebHashHistory } from "vue-router";
import Main from '../pages/Main.vue'
import Favourites from '../pages/Favourites.vue'
import Deals from '../pages/Deals.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/favourites',
      component: Favourites
    },
    {
      path: '/deals',
      component: Deals
    }
  ]
})