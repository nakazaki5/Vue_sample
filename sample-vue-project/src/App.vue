<template>
  <button @click="increment">Up vote</button>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    WatchQue
  }
  data(){
    return{ count: 1}
  },
  methods: {
    increment() {
      // `this` はコンポーネントインスタンスを参照
      this.count++
      console.log(this.count)
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
