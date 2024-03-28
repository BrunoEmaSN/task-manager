<template>
  <button
    class="rounded-md bg-cyan-600 px-5 py-3 mb-4 text-md font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 w-full flex justify-center"
    @click="openModalAdd"
  >
    <PlusIcon class="w-6 h-6" />
  </button>
  <div class="border border-gray-700 rounded-lg overflow-hidden">
    <table class="table-fauto w-full text-left">
      <thead class="bg-cyan-800 text-white">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Rol</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="h-ful text-gray-950 font-medium">
        <tr v-for="user in userStore.users.filter((u) => u.rol !== 'noaccess')" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <span
              class="text-white p-2 rounded-md"
              :class="{
                'bg-yellow-500': user.rol === ROLES.SUPERADMIN,
                'bg-gray-400 text-gray-800': user.rol === ROLES.EMPLOYEE
              }"
            >
              {{ user.rol }}
            </span>
          </td>
          <td>
            <button class="text-cyan-700 font-extrabold">
              <EllipsisVerticalIcon class="w-6 h-6 text-gray-900 hover:text-cyan-800" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <TablePagination
      :totalPages="1"
      :perPage="1"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
      :maxVisibleButtons="5"
    />
  </div>

  <UserModal
    :title="titleModal"
    :showModal="showModal"
    :closeModal="closeModal"
    :actionModal="actionUser"
  />
</template>
<script lang="ts">
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/vue/16/solid'
import TablePagination from './TablePagination.vue'
import UserModal from './UserModal.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import ROLES from '@/constants/roles'

export default {
  setup() {
    let showModal = ref(false)
    let titleModal = ref('')
    const userStore = useUserStore()

    userStore.findUsers({})

    return {
      userStore,
      showModal,
      titleModal
    }
  },
  components: {
    TablePagination,
    EllipsisVerticalIcon,
    PlusIcon,
    UserModal
  },
  data() {
    return {
      currentPage: 1,
      ROLES
    }
  },
  methods: {
    onPageChange(page: number) {
      console.log(page)
      this.currentPage = page
    },
    openModalAdd() {
      this.showModal = true
      this.titleModal = 'Add User'
    },
    openModalEdit() {
      this.showModal = true
      this.titleModal = 'Edit User'
    },
    closeModal() {
      this.showModal = false
    },
    actionUser() {
      if (this.titleModal === 'Add User') {
        this.createUser()
      }

      if (this.titleModal === 'Edit User') {
        this.updateUser()
      }

      if (this.titleModal === 'Delete user') {
        this.deleteuser()
      }
    },
    createUser() {},
    updateUser() {},
    deleteuser() {}
  }
}
</script>

<style scoped>
table tbody tr:nth-child(odd) {
  background: #f9f9f9;
}
table tbody tr:nth-child(even) {
  background: #e3ecf1;
}

th,
td {
  padding: 15px;
}
</style>
