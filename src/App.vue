<script>
</script>

<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <!-- Navegación normal -->
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="calcDropdown" role="button" data-bs-toggle="dropdown">
                  Calculadora
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/calculadoraV1" class="dropdown-item">CalculadoraV1</router-link></li>
                  <li><router-link to="/calculadoraV2" class="dropdown-item">CalculadoraV2</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="horarioDropdown" role="button" data-bs-toggle="dropdown">
                  Horario
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/horario1" class="dropdown-item">Horario1</router-link></li>
                  <li><router-link to="/horario2" class="dropdown-item">Horario2</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/eventos">Eventos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/padre">Padre</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="listasDropdown" role="button" data-bs-toggle="dropdown">
                  Listas
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/recorrido" class="dropdown-item">Recorrido</router-link></li>
                  <li><router-link to="/listas" class="dropdown-item">Listas1</router-link></li>
                </ul>
              </li>
            </ul>

       
            <div class="d-flex">
              <router-link to="/sesion/login" class="btn btn-outline-primary rounded-pill">
                <i class="bi bi-person-circle me-1"></i> Iniciar Sesión
              </router-link>
            </div>
          </div>
        </div>
      </nav>

      <router-view></router-view>
    </div>
  </div>
</template>

<style>

.btn-outline-primary {
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background-color: #0d6efd;
  color: white;
}
</style>
