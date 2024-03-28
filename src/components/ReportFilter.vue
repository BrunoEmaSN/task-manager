<template>
  <div class="grid grid-cols-1 gap-x-6 md:gap-y-8 sm:grid-cols-4 lg:grid-cols-8 items-end">
    <TextField label="Start" name="startDate" type="date" />
    <TextField label="End" name="endDate" type="date" />
    <VButton text="Filter" name="button" classStyle="w-full lg:w-40" />
    <button
      class="rounded-md bg-cyan-600 px-5 py-3 mb-4 text-md font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 w-full lg:w-40 flex justify-center"
    >
      <EnvelopeIcon class="w-6 h-6" />
    </button>
  </div>
</template>

<script lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/16/solid'
import TextField from './TextField.vue'
import VButton from './VButton.vue'

export default {
  components: {
    TextField,
    VButton,
    EnvelopeIcon
  }
}
</script>
