<template>
  <div class="container mt-5" style="max-width: 420px;">
    <div class="card shadow-lg rounded-4 border-0">
      <div class="card-body p-4">
        <h3 class="text-center mb-4 fw-bold text-primary">Iniciar Sesión</h3>
        <form @submit.prevent="login">
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
          <button type="submit" class="btn btn-primary w-100">Entrar</button>
        </form>
        <div class="text-center mt-3">
          <router-link to="/sesion/registro" class="text-decoration-none text-secondary">
            ¿No tienes cuenta? <strong>Regístrate</strong>
          </router-link>
        </div>
      </div>
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

<style scoped>
.card {
  background-color: #ffffff;
}
</style>
