import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import HomePage from '../views/HomePage.vue'
import PageSecond from '../views/Kolam.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        // component: () => import('@/views/HomePage.vue')
        component: HomePage
      },
      {
        path: 'kolam',
        // component: () => import('@/views/Page2.vue')
        component: PageSecond
      }
    ]
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: HomePage
  // },
  // {
  //   path: '/page2',
  //   name: 'Page2',
  //   component: PageSecond
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
