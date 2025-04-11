<template>
    <div>
      <h1>Horario</h1>
      <p>Seleccione la versión de la calculadora que desea usar:</p>
      <ul>
        <li><router-link to="/horario1">Horraio1</router-link></li>
        <li><router-link to="/horario2">Horario2</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Horario',
  };
  </script>
  
  <style scoped>
  /* Agrega aquí tus estilos */
  </style>
  