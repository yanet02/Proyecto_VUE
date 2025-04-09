<script setup>
import { ref } from 'vue'
import Hijo1 from './Hijo1.vue'
import Hijo2 from './Hijo2.vue'


</script>

<template>
  <div class="container">
    <h1>Soy el componente padre</h1>
    <hijo1 class="mt-4" edad="10" />
    <hijo2 class="mt-4" edad="4" />
  </div>
  

</template>
<style scoped></style>