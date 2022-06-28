<template>
  <div>
    <h1><p class="title">Counter</p></h1>
    <button class="down-button" @click="countDown">-</button>
    <span class="count">{{ count }}</span>
    <span v-if="seen" class="count-down">{{ count }}</span>
    <button class="up-button" @click="countUp">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue"

const count = ref(0)
const countUp = function up() {
  count.value++
  return count
}
const countDown = function down() {
  count.value--
  return count
}
</script>
