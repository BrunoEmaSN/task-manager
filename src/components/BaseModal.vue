<template>
  <Teleport to="#modals">
    <div v-if="show">
      <div class="fixed inset-0 bg-gray-900 opacity-40"></div>
      <div class="fixed inset-0 flex items-center justify-center">
        <div class="bg-white text-black">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  props: {
    show: Boolean
  }
}
</script>
