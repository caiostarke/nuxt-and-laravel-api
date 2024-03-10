<script lang="ts" setup>
import { ref } from 'vue';

  const form = ref({
    email: "test@example.com",
    password: "password",
  })

  async function handleLogin() {
    await useApiFetch('/sanctum/csrf-cookie');


    await useApiFetch('/login', {
      method: 'POST',
      body: form.value,
    });

    const { data } = await useApiFetch('/api/user');
    
    console.log(data)
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
