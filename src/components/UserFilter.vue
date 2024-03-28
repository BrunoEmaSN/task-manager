<template>
  <div class="grid grid-cols-1 gap-x-6 sm:grid-cols-4 items-end">
    <TextField label="Name" name="name" type="text" />
    <VSelect label="Rol" name="rol" :options="roles" />
    <VSelect label="E-mail" name="email" :options="emials" />
    <VButton text="Filter" name="button" classStyle="w-full lg:w-40" />
  </div>
</template>

<script lang="ts">
import TextField from './TextField.vue'
import VSelect from './VSelect.vue'
import VButton from './VButton.vue'
import ROLES from '@/constants/roles'

export default {
  components: {
    TextField,
    VSelect,
    VButton
  },

  data() {
    return {
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
      ],
      emials: [
        {
          id: 0,
          title: 'All',
          value: 0
        },
        {
          id: 1,
          title: 'sanchezbruno689@gmail.com',
          value: 1
        },
        {
          id: 2,
          title: 'martinezrebeca@gmail.com',
          value: 2
        }
      ]
    }
  }
}
</script>
