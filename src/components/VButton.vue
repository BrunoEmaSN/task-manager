<template>
  <div class="p-4">
    <button
      class="rounded-md px-5 py-3 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      :class="{
        classStyle,
        'bg-red-600 hover:bg-red-500': color === 'danger',
        'bg-green-700 hover:bg-green-600': color === 'success',
        'bg-yellow-600 hover:bg-yellow-500': color === 'warning',
        'bg-cyan-600 hover:bg-cyan-500': color === 'default',
        'bg-gray-700 hover:bg-gray-600': color === 'gray'
      }"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: { type: String, required: true },
    name: { type: String, required: true },
    classStyle: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false,
      validator(value: string) {
        return ['success', 'warning', 'danger', 'default', 'gray'].includes(value)
      },
      default() {
        return 'default'
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('onclick', 1)
    }
  }
}
</script>
