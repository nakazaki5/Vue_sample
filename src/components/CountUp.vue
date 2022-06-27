<template>
  <button @click="counter">ボタン</button>
  カウント回数： <span>{{ count }}</span>
</template>

<script setup>
import { ref } from "vue"

const count = ref(0)
const counter = function counter() {
  count.value++
  return count
}
</script>
