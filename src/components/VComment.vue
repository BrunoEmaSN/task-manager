<template>
  <div class="bg-cyan-600 rounded p-4 w-fit">
    <h5 class="ml-5">{{ author }}</h5>
    {{ text }}
  </div>
</template>
<script lang="ts">
export default {
  props: {
    text: String,
    author: String,
    createdAt: String
  }
}
</script>
