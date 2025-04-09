<template>
    <div class="container py-4">
      <div class="card shadow-lg p-3 bg-light rounded">
        <h3 class="text-center text-dark bg-gradient bg-success py-3 rounded">HORARIO DE CLASES DE SISTEMAS</h3> 
        <div class="table-responsive">
          <table class="table table-bordered table-striped text-center shadow-sm">
            <thead class="bg-dark text-white">
              <tr>
                <th scope="col" class="bg-danger text-dark" style="width: 150px;">Hora</th> 
                <th scope="col" class="bg-primary text-dark">Lunes</th>
                <th scope="col" class="bg-info text-dark">Martes</th>
                <th scope="col" class="bg-success text-dark">Miércoles</th>
                <th scope="col" class="bg-warning text-dark">Jueves</th>
                <th scope="col" class="bg-secondary text-dark">Viernes</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(h, index) in horario" :key="index">
                <td class="table-danger fw-bold text-dark" style="min-width: 150px;">{{ h.hora }}</td> 
                <td v-html="h.lunes" class="table-primary text-dark"></td>
                <td v-html="h.martes" class="table-info text-dark"></td>
                <td v-html="h.miercoles" class="table-success text-dark"></td>
                <td v-html="h.jueves" class="table-warning text-dark"></td>
                <td v-html="h.viernes" class="table-secondary text-dark"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const horario = ref([
    { hora: '07:00 - 09:00', lunes: '<strong>Programación Lógica</strong><br>Aula: LDS<br>Profesor: Sánchez Vásquez Lucia', martes: '<strong>Inteligencia Artificial</strong><br>Aula: ACS<br>Profesor: Vásquez Martínez Josué Israel', miercoles: '<strong>Desarrollo Ágil</strong><br>Aula: ACS<br>Profesor: Vásquez Martínez Josué Israel', jueves: '<strong>Programación Lógica</strong><br>Aula: RDS<br>Profesor: Sánchez Vásquez Lucia', viernes: '<strong>Desarrollo Ágil</strong><br>Aula: ACS<br>Profesor: Vásquez Martínez Josué Israel' },
    { hora: '09:00 - 11:00', lunes: '<strong>Desarrollo Ágil</strong><br>Aula: LDS<br>Profesor: Vásquez Martínez Josué Israel', martes: '<strong>Administración de Redes</strong><br>Aula: RDS<br>Profesor: García Hernández Astrid Mildred', miercoles: '', jueves: '<strong>Administración de Redes</strong><br>Aula: RDS<br>Profesor: García Hernández Astrid Mildred', viernes: '<strong>Desarrollo en la Nube</strong><br>Aula: 4<br>Profesor: Pérez García Audel Rolando' },
    { hora: '11:00 - 13:00', lunes: '', martes: '<strong>Desarrollo en la Nube</strong><br>Aula: RDS<br>Profesor: Pérez García Audel Rolando', miercoles: '<strong>Desarrollo en la Nube</strong><br>Aula: LC3<br>Profesor: Pérez García Audel Rolando', jueves: '<strong>Inteligencia Artificial</strong><br>Aula: RDS<br>Profesor: Vásquez Martínez Josué Israel', viernes: '' },
    { hora: '13:00 - 15:00', lunes: '', martes: '', miercoles: '<strong>Desarrollo con Realidad Aumentada</strong><br>Aula: LC3<br>Profesor: Román Cruz José Alfredo', jueves: '<strong>Desarrollo con Realidad Aumentada</strong><br>Aula: ACS<br>Profesor: Román Cruz José Alfredo', viernes: '' },
    { hora: '14:00 - 16:00', lunes: '', martes: '', miercoles: '<strong>Taller de Investigación II</strong><br>Aula: ACS<br>Profesor: Ortiz Ortiz Alfonso', jueves: '', viernes: '<strong>Taller de Investigación II</strong><br>Aula: 9<br>Profesor: Ortiz Ortiz Alfonso' },
    { hora: '15:00 - 17:00', martes: '<strong>Desarrollo con Realidad Aumentada</strong><br>Aula: LDS<br>Profesor: Román Cruz José Alfredo', miercoles: '', jueves: '', viernes: '' }
  ]);
  </script>
  
  <style scoped>
  .table th, .table td {
    vertical-align: middle;
    border: 2px solid #000000;
  }
  .table th {
    color: #fff;
  }
  .table td {
    color: #333;
  }
  </style>