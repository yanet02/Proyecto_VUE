<template>
    <div class="container mt-5" style="max-width: 400px;">
      <h3 class="text-center mb-4">LÓGIN</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Correo</label>
          <input v-model="email" type="email" class="form-control" id="email" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input v-model="password" type="password" class="form-control" id="password" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Entrar</button>
      </form>
      <div class="text-center mt-3">
        <router-link to="/sesion/registro">¿No tienes cuenta? Regístrate</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  const login = () => {
    alert(`Iniciando sesión con: ${email.value}`);
  
  };
  </script>
  