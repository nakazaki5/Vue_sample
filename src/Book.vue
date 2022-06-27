<template>
  <p>Has published books:</p>
  <input
    type="text"
    :value="author.bookName"
    @input="author.bookName = $event.target.value"
  />
  <div>文字数：{{ publishedBooksMessage }}</div>
</template>
<script>
export default {
  name: "BookLooking",
  data() {
    return {
      author: {
        name: "John Doe",
        bookName: "",
      },
    }
  },
  computed: {
    publishedBooksMessage() {
      return this.author.bookName.length
    },
  },
}
</script>
