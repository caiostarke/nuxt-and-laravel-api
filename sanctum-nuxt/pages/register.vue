<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/useAuthStore';

  const form = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  const auth = useAuthStore();
  async function handleRegister() {  
    const { error } = await auth.register(form.value)
    if (!error) {
      navigateTo('/');
    }

  }

</script>

<template>
  <div>
    <form @submit.prevent="handleRegister">
      <label for="email">Name
        <input id="name" type="text" v-model="form.name">
      </label>

      <label for="email">Email
        <input id="email" type="email" v-model="form.email">
      </label>

      <label for="password">Password
        <input id="password" type="password" v-model="form.password">
      </label>

      <label for="password">Password Confirmation
        <input id="password_confirmation" type="password_confirmation" v-model="form.password_confirmation">
      </label>

      <button>Login</button>
    </form>
    
  </div>
</template>

<style scoped></style>
