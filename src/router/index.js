import { createRouter, createWebHistory } from 'vue-router'

import TodayTasks from '@/views/TodayTasks.vue'
import ImportantTasks from '@/views/ImportantTasks.vue'
import CompletedTasks from '@/views/CompletedTasks.vue'
import UncompletedTasks from '@/views/UncompletedTasks.vue'
import AllTasks from '@/views/AllTasks.vue'

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
