<template>
    <div class="container mt-5" style="max-width: 400px;">
      <h3 class="text-center mb-4">Registro de Formulario</h3>
      <form @submit.prevent="registrar">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input v-model="nombre" type="text" class="form-control" id="nombre" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo</label>
          <input v-model="email" type="email" class="form-control" id="email" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input v-model="password" type="password" class="form-control" id="password" required />
        </div>
        <button type="submit" class="btn btn-success w-100">Registrarse</button>
      </form>
      <div class="text-center mt-3">
        <router-link to="/sesion/login">¿Ya tienes cuenta? Inicia sesión</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const nombre = ref('');
  const email = ref('');
  const password = ref('');
  
  const registrar = () => {
    alert(`Registrando a: ${nombre.value} con correo ${email.value}`);
    
  };
  </script>
  