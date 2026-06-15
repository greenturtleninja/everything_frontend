import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import SensorView from '../views/Sensor.vue'
import EagleView from '../views/EagleBank.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/sensor', component: SensorView },
  { path: '/eagle', component: EagleView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
