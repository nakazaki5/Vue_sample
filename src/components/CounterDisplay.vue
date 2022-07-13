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
        <router-link to="/"><span>«</span></router-link>
      </li>
      <li>
        <router-link to="/"><span>1</span></router-link>
      </li>
      <li>
        <router-link to="/speech"><span>2</span></router-link>
      </li>
      <li>
        <router-link to="/reception"><span>3</span></router-link>
      </li>
      <li class="next">
        <router-link to="/speech"><span>»</span></router-link>
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
