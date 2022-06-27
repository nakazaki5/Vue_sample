<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>

<script setup>
const vMyDirective = {
  beforeMount: (el) => {
    // 要素でなにかをします
    el.style.backgroundColor = "red"
  },
}
</script>
