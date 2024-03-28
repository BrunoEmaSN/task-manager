<template>
  <VButton text="Upload File" name="button" classStyle="w-full" />
  <div class="border border-gray-700 rounded-lg overflow-hidden">
    <table class="table-auto w-full text-left">
      <thead class="bg-cyan-800 text-white">
        <tr>
          <th>ID</th>
          <th>File</th>
          <th>Upload by</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="h-ful text-gray-950 font-medium">
        <tr>
          <th>1</th>
          <td>hola_mundo.css</td>
          <td>Bruno Sanchez</td>
          <td>2024/03/23</td>
          <td>
            <button class="text-cyan-700 font-extrabold">
              <ArrowDownTrayIcon class="w-6 h-6 text-gray-900 hover:text-cyan-800" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { ArrowDownTrayIcon } from '@heroicons/vue/16/solid'
import VButton from '@/components/VButton.vue'

export default {
  components: {
    ArrowDownTrayIcon,
    VButton
  }
}
</script>
