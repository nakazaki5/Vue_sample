<template>
  <h1>'{{ a }},{{ b }}'{{ c }}</h1>
</template>

<script setup>
import { ref } from "vue"

const a = 1
const b = ref(2)
const c = ref({
  msg: "hoge",
})

defineExpose({
  a,
  b,
  c,
})

</script>
