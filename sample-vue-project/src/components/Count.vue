<template>
  <div id = 'count'>
    HelloWorld!
    </div>
</template>

<script>
// const app = Vue.createApp({})
// app.component('SerchInput',SerchInputComponent)
// app.directiv('focus',FocusDirective)
// app.use(LocalePlugin)

// const app = Vue.createApp(RootComponent)
// const vm = app.mount('#app')
const app = Vue.createApp({
    data(){
        return{count: 4}
    },
    created(){
        console.log('count is: ' + this.count)
    }
})

// const vm = app.mount('#app')
// console.log(vm.mount)
</script>