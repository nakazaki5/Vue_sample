<template>
  <h1>音声入力</h1>
  <div class="block">
    <div v-if="seen" class="loading">
      <span>H</span>
      <span class="animate">E</span>
      <span class="animate">A</span>
      <span class="animate">R</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
    <p>
      <textarea v-model="text" cols="40" rows="10" class="recognition-text" />
    </p>
    <div class="button-area">
      <button class="start-button" @click="startSpeech">
        {{ recognitionText }}
      </button>
      <button @click="stopSpeech">終了</button>
    </div>
  </div>
  <div class="pager">
    <ul class="pagination">
      <li class="pre">
        <a href="http://localhost:8080/"><span>«</span></a>
      </li>
      <li>
        <a href="http://localhost:8080/"><span>1</span></a>
      </li>
      <li>
        <a href="http://localhost:8080/speech" class="active"><span>2</span></a>
      </li>
      <li class="next">
        <a href="http://localhost:8080/speech"><span>»</span></a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const recongnition = new webkitSpeechRecognition()
const seen = ref(false)
const text = ref("")
const recognitionText = ref("🎙 聞き取り開始")

onMounted(() => {
  recongnition.onstart = () => {
    seen.value = true
    recognitionText.value = "聞き取り中…"
    text.value = ""
  }

  recongnition.onend = () => {
    seen.value = false
    recognitionText.value = "🎙 聞き取り開始"
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

const stopSpeech = function stopVoice() {
  recongnition.stop()
}
</script>
