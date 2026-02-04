<script setup lang="ts">
import { useUsersQuery, useCreateUserMutation } from '@/queries/users.query'

const { data, isLoading } = useUsersQuery()
const { mutate: createUser } = useCreateUserMutation()

const add = () => {
  createUser({ name: 'Rizki' })
}
</script>

<template>
  <div>
    <button @click="add">Tambah</button>

    <p v-if="isLoading">Loading...</p>

    <ul>
      <li v-for="u in data" :key="u.id">
        {{ u.name }}
      </li>
    </ul>
  </div>
</template>
