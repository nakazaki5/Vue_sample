import { createApp } from "vue"
//  import App from './App.vue'
import SetUp from "./Book.vue"

// createApp(App).mount('#app')

// const vm =createApp({
//   data(){
//          return{ count: 4 }
//        }
// }).mount('#app')

// const app = createApp({
//   data(){
//     return{ count: 1}
//   },
//   methods: {
//     increment() {
//       // `this` はコンポーネントインスタンスを参照
//       this.count++
//     }
//   }
// })

const app = createApp(SetUp)
app.mount("#app")

// console.log(vm.count)

// vm.increment()

// console.log(vm.$data.count)
