<template>
  <div class="py-4 relative">
    <div class="sm:col-span-3">
      <label v-if="label" :for="name" class="block text-sm font-medium leading-6 text-gray-900">{{
        label
      }}</label>

      <input
        type="search"
        :id="name"
        :name="name"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 px-2"
        v-model="search"
      />

      <ul v-if="searched.length" class="absolute bg-gray-700 mt-2 p-2 rounded">
        <li>Showing {{ searched.length }} of {{ options.length }} results</li>
        <li
          v-for="option in searched"
          :key="option.id"
          @click="selectOption(option.id)"
          class="hover:text-cyan-700 cursor-pointer"
        >
          {{ option.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

type Option = {
  id: number
  text: string
}

export default {
  props: {
    label: { type: String, required: false },
    name: { type: String, required: true },
    options: { type: Array<Option>, required: true }
  },
  setup() {
    let search = ref('')
    let selected = ref<number>()
    let show = ref(false)
    return {
      search,
      selected,
      show
    }
  },
  computed: {
    searched() {
      if (this.search === '') {
        return []
      }

      let matches = 0

      return this.options.filter((option: Option) => {
        if (option.text.toLowerCase().includes(this.search.toLowerCase()) && matches < 10) {
          matches++
          return option
        }
      })
    }
  },
  methods: {
    selectOption(id: number) {
      this.selected = id
      this.search = this.options.find((option) => option.id === id)?.text || ''
      this.show = true
    },
    onChange() {
      this.show = false
    }
  }
}
</script>
