<template>
  <button @click="increment">Up vote</button>
</template>

<script>

export default {
  name: "App",
  data() {
    return { count: 1 }
  },
  methods: {
    increment() {
      this.count++
      console.log(this.count)
    },
  },
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
