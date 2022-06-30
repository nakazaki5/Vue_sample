import { createRouter, createWebHistory } from "vue-router"
import CounterDisplay from "@/components/CounterDisplay.vue"
import SpeechRecognition from "@/components/SpeechRecognition.vue"

const routes = [
  {
    path: "/",
    name: " CounterDisplay",
    component: CounterDisplay,
  },
  {
    path: "/speech",
    name: "SpeechRecognition",
    component: SpeechRecognition,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
