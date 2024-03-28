<template>
  <div class="py-4">
    <div class="sm:col-span-3">
      <label v-if="label" :for="name" class="block text-sm font-medium leading-6 text-gray-900">{{
        label
      }}</label>
      <div>
        <input
          :type="type"
          :name="name"
          :id="name"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 px-2"
          :class="classStyle"
        />
      </div>
      <div class="text-sm text-red-800 h-1">
        {{ error }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    label: { type: String, required: false },
    type: { type: String, required: false },
    name: { type: String, required: true },
    classStyle: { type: String, required: false },
    error: { type: String, required: false }
  }
}
</script>
