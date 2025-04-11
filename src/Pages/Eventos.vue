<template>
  <div class="container">
    <div class="row mt-4">
      <div>
        <h4>Evento Click</h4>
        <button @click="clic"
                style="background-color: red; color: white; border: none; padding: 5px 10px; margin-right: 10px; border-radius: 5px; font-size: 14px; cursor: pointer;">
          Dale clic
        </button>
        <button @click="soyButon"
                style="background-color: gold; color: black; border: none; padding: 5px 10px; border-radius: 5px; font-size: 14px; cursor: pointer;">
          Dale clic 2
        </button>
      </div>

      <div class="mt-4">
        <h4>Evento Change</h4>
        <label class="input-group-text" for="nombre">Ingresa tu nombre</label>
        <input class="form-control mt-2" type="text" id="nombre" @change="nombreE">
        <p>El nombre ingresado es: <strong>{{ nombre }}</strong> </p>
      </div>

      <div class="mt-4">
        <h3>Evento de mouseenter y mouseleave</h3>
        <div class="text-center"
             style="color: #fff; width: 300px; height: 200px; background-color: black; text-align: center; padding: 15px; border-radius: 14px;"
             @mouseenter="mostrarMensaje" @mouseleave="ocultarMensaje">
          <p>pase el mouse</p>
          <p>{{ mensaje }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      mensaje: '',
    }
  },
  methods: {
    clic() {
      alert("gracias por darle clic");
    },
    soyButon() {
      alert("soy un botón");
    },
    nombreE(event) {
      this.nombre = event.target.value;
    },
    mostrarMensaje() {
      this.mensaje = "El mouse está dentro del rectángulo";
    },
    ocultarMensaje() {
      this.mensaje = "El mouse está fuera del rectángulo";
    }
  }
}
</script>

<style>
/* Puedes dejarlo vacío o agregar cosas si gustas */
</style>
