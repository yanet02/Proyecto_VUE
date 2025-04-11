<template>
  <div class="container mt-5" style="max-width: 420px;">
    <div class="card shadow-lg rounded-4 border-0">
      <div class="card-body p-4">
        <h3 class="text-center mb-4 fw-bold text-success">Crear cuenta</h3>
        <form @submit.prevent="registrar">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre completo</label>
            <div class="input-group">
              <span class="input-group-text bg-light"><i class="bi bi-person-fill"></i></span>
              <input
                v-model="nombre"
                type="text"
                class="form-control"
                id="nombre"
                placeholder="Tu nombre"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <div class="input-group">
              <span class="input-group-text bg-light"><i class="bi bi-envelope-fill"></i></span>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <div class="input-group">
              <span class="input-group-text bg-light"><i class="bi bi-lock-fill"></i></span>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <button type="submit" class="btn btn-success w-100">Registrarse</button>
        </form>
        <div class="text-center mt-3">
          <router-link to="/sesion/login" class="text-decoration-none text-secondary">
            ¿Ya tienes cuenta? <strong>Inicia sesión</strong>
          </router-link>
        </div>
      </div>
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

<style scoped>
.card {
  background-color: #ffffff;
}
</style>
