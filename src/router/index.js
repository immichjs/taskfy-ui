import { createRouter, createWebHistory } from 'vue-router'

import TodayTasks from '@/components/TodayTasks.vue'
import ImportantTasks from '@/components/ImportantTasks.vue'
import CompletedTasks from '@/components/CompletedTasks.vue'
import UncompletedTasks from '@/components/UncompletedTasks.vue'
import AllTasks from '@/components/AllTasks.vue'

const routes = [
  { path: '/', component: AllTasks },
  { path: '/today', component: TodayTasks },
  { path: '/important', component: ImportantTasks },
  { path: '/completed', component: CompletedTasks },
  { path: '/uncompleted', component: UncompletedTasks },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
