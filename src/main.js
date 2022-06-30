import { createApp } from "vue"
import SetUp from "./App.vue"
import "./assets/style/_index.scss"
import router from "./router"

const app = createApp(SetUp)
app.use(router)
app.mount("#app")
