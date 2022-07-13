<template>
  <body class="box" :class="isRedBox ? 'red' : ''">
    <h2>音声受付システム</h2>
    <div class="block">
      <div v-if="page === 1">
        <button class="button" @click="startSpeech">
          {{ recognitionText }}
          <img class="call-img" src="./call.png" />
        </button>
        <button class="button">
          その他の用件
          <img class="women-img" src="./women.png" />
        </button>
      </div>

      <div v-if="page === 2">
        <div>担当者の名前をお話しください</div>
        <p>
          <textarea
            v-model="text"
            cols="50"
            rows="5"
            class="recognition-text"
          />
        </p>
      </div>

      <div v-if="page === 3">
        <div>仲﨑につなぎますか？</div>
        <p class="sample" :class="isRedSample ? 'red' : ''">
          <img src="./image.jpeg" alt="新入社員の仲崎につなぎますか？" />
        </p>
        <button class="call-button" @click="search">Call</button>
      </div>

      <div v-if="page === 4">
        <div class="connect-anime">
          <span>C</span>
          <span>O</span>
          <span class="animate">N</span>
          <span class="animate">N</span>
          <span class="animate">E</span>
          <span class="animate">C</span>
          <span class="animate">T</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>

      <div v-if="page === 5">
        <div>{{ call }}</div>
        <div>
          <p class="sample">
            <img src="./image.jpeg" />
          </p>
          <div class="finish-button" @click="reset">
            <span>通話終了</span>
          </div>
        </div>
      </div>
    </div>
    <div class="reception-pager">
      <ul class="reception-page-nation">
        <li class="pre">
          <router-link to="/speech"><span>«</span></router-link>
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
          <router-link to="/reception"><span>»</span></router-link>
        </li>
      </ul>
    </div>
  </body>
</template>

<script setup>
import { ref, onMounted } from "vue"

const recognition = new webkitSpeechRecognition()

const page = ref(1)
const text = ref("")
const call = ref("")
const isRedBox = ref(false)
const isRedSample = ref(false)
const recognitionText = ref("担当者の呼び出し")

onMounted(() => {
  recognition.lang = "ja"
  recognition.interimResults = true

  recognition.onstart = () => {
    recognitionText.value = "お話しください"
    text.value = ""
  }

  recognition.onend = () => {
    setTimeout(() => {
      //○○さまにおつなぎして宜しいでしょうか？
      page.value = 3
      recognitionText.value = "担当者の呼び出し"
      call.value = "image: 仲崎につなぎますか？"
    }, 3000)
  }

  recognition.onresult = (event) => {
    var results = event.results
    for (var i = event.resultIndex; i < results.length; i++) {
      text.value = results[i][0].transcript
      if (userSaid(text.value, "中崎")) {
        //自分の写真
        text.value.replace("中﨑", "仲﨑")
        console.log(text)
        isRedBox.value = true
      } else {
        //ほかの写真
        isRedSample.value = true
      }
    }
  }
})

const userSaid = function (text, s) {
  return text?.indexOf(s) ?? -1 >= 0
}

const startSpeech = function voice() {
  recognition.start()
  page.value = 2
}

const search = function searchWho() {
  page.value = 4
  call.value = "呼び出し中です..."
  setTimeout(() => {
    page.value = 5
    call.value = "通話中…"
  }, 3000)
}

const reset = () => {
  page.value = 1
}
</script>
