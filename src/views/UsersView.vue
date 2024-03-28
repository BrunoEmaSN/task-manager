<template>
  <h1 class="text-gray-900 mt-5 text-2xl font-semibold">Users</h1>
  <UserFilter />
  <UsersTable />
</template>
<script lang="ts">
import UserFilter from '@/components/UserFilter.vue'
import UsersTable from '@/components/UsersTable.vue'

export default {
  components: {
    UserFilter,
    UsersTable
  }
}
</script>
