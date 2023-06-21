import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WritingSessionView from '../views/WritingSessionView.vue'
import { WritingSession } from '@/model/WritingSession'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/session',
      //   name: 'new-writing-session',
      redirect: `/session/${WritingSession.generateNewSessionId()}`
    },
    {
      path: '/session/:sessionId',
      name: 'writing-session',
      component: WritingSessionView,
      props: true
    }
  ]
})

export default router
