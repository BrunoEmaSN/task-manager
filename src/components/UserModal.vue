<template>
  <BaseModal :show="showModal">
    <div class="p-5 w-80">
      <div class="flex justify-end">
        <button type="button" class="text-gray-700 px-3 py-3 font-medium" @click="close">
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>
      <div class="text-gray-800 text-lg uppercase text-center">{{ title }}</div>
      <div v-if="title === 'Add User' || title === 'Edit User'">
        <div>
          <TextField label="Name" name="name" type="text" />
          <TextField label="E-mail" name="email" type="email" />
          <TextField label="Birth Date" name="birthDate" type="date" />
          <TextField label="Address" name="address" type="text" />
          <VSelect label="Rol" name="rol" :options="roles" />
        </div>
      </div>
      <div class="bg-yellow-300 text-gray-800">
        <div class="flex items-center space-x-2">
          <p>Are you sure you want to delete this user?</p>
          <ExclamationTriangleIcon class="w-6 h-6" />
        </div>
        <span></span>
      </div>
      <div class="flex justify-between">
        <VButton text="Cancel" name="button" classStyle="w-30" color="gray" @click="close" />
        <VButton
          :text="textButton"
          name="button"
          classStyle="w-20"
          :color="colorButton"
          @click="action"
        />
      </div>
    </div>
  </BaseModal>
</template>

<script lang="ts">
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/16/solid'
import BaseModal from './BaseModal.vue'
import ROLES from '@/constants/roles'
import TextField from './TextField.vue'
import VSelect from './VSelect.vue'
import VButton from './VButton.vue'
import User from '../models/User'

export default {
  components: {
    BaseModal,
    XMarkIcon,
    TextField,
    VSelect,
    VButton,
    ExclamationTriangleIcon
  },
  props: {
    showModal: Boolean,
    title: String,
    user: { type: User, required: false },
    closeModal: { type: Function, required: true },
    actionModal: { type: Function, required: true }
  },
  data() {
    let textButton = ''
    let colorButton = 'default'
    if (this.title === 'Add User') {
      textButton = 'Save'
      colorButton = 'success'
    }

    if (this.title === 'Edit User') {
      textButton = 'Update'
      colorButton = 'default'
    }

    if (this.title === 'Delete') {
      textButton = 'Delete'
      colorButton = 'danger'
    }

    return {
      textButton,
      colorButton,
      roles: [
        {
          id: 'all',
          title: 'All',
          value: ''
        },
        {
          id: ROLES.SUPERADMIN,
          title: 'Super Admin',
          value: ROLES.SUPERADMIN
        },
        {
          id: ROLES.EMPLOYEE,
          title: 'Employee',
          value: ROLES.EMPLOYEE
        }
      ]
    }
  },
  methods: {
    close() {
      this.closeModal()
    },
    action() {
      this.actionModal()
      this.close()
    }
  }
}
</script>
