<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/useAuthStore';

  const form = ref({
    email: "test@example.com",
    password: "password",
  })

  const auth = useAuthStore();
  async function handleLogin() {  
    const { error } = await auth.login(form.value)
    
    console.log(error)
  }

</script>

<template>
  <div>
    <form @submit.prevent="handleLogin">
      <label for="email">email
        <input id="email" v-model="form.email">
      </label>

      <label for="password">password
        <input id="password" v-model="form.password">
      </label>
      <button>Login</button>
    </form>
    
  </div>
</template>

<style scoped></style>
