<template>
  <div class="py-4">
    <div class="sm:col-span-3">
      <label v-if="label" :for="name" class="block text-sm font-medium leading-6 text-gray-900">
        {{ label }}
      </label>
      <div>
        <select
          :id="name"
          :name="name"
          autocomplete="country-name"
          class="h-9 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 px-1"
          :class="classStyle"
        >
          <option v-for="option in options" :key="option.id" :value="option.value">
            {{ option.title }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
type Options = {
  id: any
  title: string
  value: number | string
}
export default {
  props: {
    label: { type: String, required: false },
    options: { type: Array<Options>, required: false },
    name: { type: String, required: true },
    classStyle: { type: String, required: false }
  }
}
</script>
