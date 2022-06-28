<template>
  <h1>音声入力</h1>
  <div class="free-text-area">
    <p><textarea v-model="text" class="recognition-text" /></p>
    <button @click="startSpeech">{{ recognitionText }}</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const recongnition = new webkitSpeechRecognition()

const text = ref("")
const recognitionText = ref("音声入力開始")

onMounted(() => {
  recongnition.onstart = () => {
    recognitionText.value = "音声入力中..."
  }
  recongnition.onend = () => {
    recognitionText.value = "音声入力開始"
  }
  recongnition.onresult = (event) => {
    if (event.results.length > 0) {
      text.value = event.results[0][0].transcript
    }
  }
})

const startSpeech = function voice() {
  recongnition.start()
}
</script>
