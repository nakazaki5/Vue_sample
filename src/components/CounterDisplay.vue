<template>
  <h1><p class="title">Counter</p></h1>
  <div class="real-form">
    <button class="down-button" @click="countDown">-</button>
    <span class="count">{{ count }}</span>
    <span v-if="seen" class="count-down">{{ count }}</span>
    <button class="up-button" @click="countUp">+</button>
  </div>
  <div class="pager">
    <ul class="pagination">
      <li class="pre">
        <a href="http://localhost:8080/"><span>«</span></a>
      </li>
      <li>
        <a href="http://localhost:8080/" class="active"><span>1</span></a>
      </li>
      <li>
        <a href="http://localhost:8080/speech"><span>2</span></a>
      </li>
      <li class="next">
        <a href="http://localhost:8080/speech"><span>»</span></a>
      </li>
    </ul>
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
