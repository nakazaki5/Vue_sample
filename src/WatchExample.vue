<template>
  <div id="#watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
    }
  },
  watch: {
    question(newQuestion) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer()
      }
    },
  },
  methods: {
    getAnswer() {
      this.answer = "Thinking..."
      axios
        .get("https://yesno.wtf/api")
        .then((response) => {
          this.answer = response.data.answer
        })
        .catch((error) => {
          this.answer = "Error! Could not reach the API. " + error
        })

    },
  },
}
</script>
