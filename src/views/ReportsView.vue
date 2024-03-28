<template>
  <h1 class="text-gray-900 mt-5 text-2xl font-semibold">Reports</h1>
  <ReportFilter />
  <ReportsTable />
</template>
<script lang="ts">
import ReportFilter from '@/components/ReportFilter.vue'
import ReportsTable from '@/components/ReportsTable.vue'

export default {
  components: {
    ReportFilter,
    ReportsTable
  }
}
</script>
