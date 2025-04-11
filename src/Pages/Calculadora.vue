<template>
    <div>
      <h1>Calculadora</h1>
      <p>Seleccione la versión de la calculadora que desea usar:</p>
      <ul>
        <li><router-link to="/calculadoraV1">CalculadoraV1</router-link></li>
        <li><router-link to="/calculadoraV2">CalculadoraV2</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Calculadora',
  };
  </script>
  
  <style scoped>
  /* Agrega aquí tus estilos */
  </style>
  