<template>
  <ul class="bg-gray-700 list-none flex justify-center items-center p-3">
    <li class="inline-block">
      <button @click="onClickFirstPage" :disabled="isInFirstPage">
        <ChevronDoubleLeftIcon
          class="h-6 w-10"
          :class="{ 'text-gray-500': isInFirstPage, 'text-white': !isInFirstPage }"
        />
      </button>
    </li>

    <li class="inline-block">
      <button @click="onClickPreviousPage" :disabled="isInFirstPage">
        <ChevronLeftIcon
          class="h-6 w-10"
          :class="{ 'text-gray-500': isInFirstPage, 'text-white': !isInFirstPage }"
        />
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li class="inline-block" v-for="page in pages" :key="page.name">
      <button
        class="text-white h-6 w-10 font-bold"
        @click="onClickPage(page.name)"
        :class="{ 'text-cyan-600': currentPage === page.name }"
        :disabled="page.isDisabled"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="inline-block">
      <button @click="onClickNextPage" :disabled="isInLastPage">
        <ChevronRightIcon
          class="h-6 w-10"
          :class="{ 'text-gray-500': isInLastPage, 'text-white': !isInLastPage }"
        />
      </button>
    </li>

    <li class="inline-block">
      <button @click="onClickLastPage" :disabled="isInLastPage">
        <ChevronDoubleRightIcon
          class="h-6 w-10"
          :class="{ 'text-gray-500': isInLastPage, 'text-white': !isInLastPage }"
        />
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/vue/16/solid'

export default {
  components: {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon
  },
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons
      }

      // When inbetween
      return this.currentPage - 1
    },
    pages() {
      const range = []

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        })
      }

      return range
    },
    isInFirstPage() {
      return this.currentPage === 1
    },
    isInLastPage() {
      return this.currentPage === this.totalPages
    }
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage(page: number) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages)
    }
  }
}
</script>
