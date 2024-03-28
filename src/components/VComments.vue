<template>
  <div class="app">
    <div class="messages">
      <VComment
        v-for="message in messages"
        :key="message.id"
        :class="['message']"
        :text="message.text"
        :author="message.author"
      />
    </div>

    <ChatBox class="chat-box" @submit="onSubmit" />
  </div>
</template>
<script lang="ts">
import ChatBox from './ChatBox.vue'
import VComment from './VComment.vue'

export default {
  components: {
    ChatBox,
    VComment
  },
  created() {
    this.getChat()
  },
  methods: {
    getChat() {
      listenChat((chat) => {
        this.messages = chat.reverse().map((m) => ({
          ...m,
          isMine: m.uid && m.uid === this.user?.id
        }))
      })
    },

    onSubmit(event, text) {
      event.preventDefault()

      sendMessage({
        text,
        uid: this.user?.id,
        author: this.user?.name
      })
    }
  },
  data: () => ({
    user: undefined,
    messages: []
  })
}
</script>
