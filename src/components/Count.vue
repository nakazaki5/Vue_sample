<template>
  <div id="count">HelloWorld!</div>
</template>

<script>

const app = Vue.createApp({
  data() {
    return { count: 4 }
  },
  created() {
    console.log("count is: " + this.count)
  },
})

</script>
