<script lang="ts" setup>
import { ref } from 'vue';

  const form = ref({
    email: "test@example.com",
    password: "password",
  })

  async function handleLogin() {
    await useFetch('http://localhost:8000/sanctum/csrf-cookie', {
      credentials: 'include',
      watch: false,
    });

    const token = useCookie('XSRF-TOKEN') 

    await useFetch('http://localhost:8000/login', {
      method: 'POST',
      credentials: 'include',
      watch: false,
      body: form.value,
      headers: {
        'X-XSRF-TOKEN': token.value as string,
      },
    });

    const { data } = await useFetch('http://localhost:8000/api/user', {
      credentials: 'include',
      watch: false,
      headers: {
        'X-XSRF-TOKEN': token.value as string,
      },
    });
    
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
