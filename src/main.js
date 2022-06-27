import { createApp } from "vue"
import SetUp from "./Book.vue"

const app = createApp(SetUp)
app.mount("#app")

console.log(vm.count)

vm.increment()

console.log(vm.$data.count)
