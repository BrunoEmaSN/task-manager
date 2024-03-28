<template>
  <div>
    <form class="w-full flex" @submit="onSubmit($event)">
      <input class="w-full flex-grow" v-model="text" placeholder="Write a message" type="text" />
      <button :class="{ 'opacity-50': !text }" :disabled="!text">Send</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onSubmit(event: Event) {
      this.$emit('submit', event, this.text)
      this.text = ''
    }
  }
}
</script>
