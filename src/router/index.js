import { createRouter, createWebHistory } from "vue-router"
import CounterDisplay from "@/components/CounterDisplay.vue"
import SpeechRecognition from "@/components/SpeechRecognition.vue"
import VoiceReception from "@/components/VoiceReception"

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
  {
    path: "/reception",
    name: "VoiceReception",
    component: VoiceReception,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
