<script>
export default {
  data() {
    return {
      display: '',
      currentValue: 0,
    };
  },
  methods: {
    agregarNumero(numero) {
      this.display += numero;
    },
    calculo() {
      try {
        this.currentValue = eval(this.display.replace('x', '*').replace('%', '/100'));
        this.display = this.currentValue.toString();
      } catch (error) {
        this.display = 'Error';
      }
    },
    LimpiarDisplay() {
      this.display = '';
    },
    eliminarNumero() {
      this.display = this.display.slice(0, -1);
    }
  }
};
</script>

<template>
  <div class="container d-flex justify-content-center mt-4" style="height: auto;">
    <div class="card p-3" style="width: 320px; background-color: #f0f0f0; border-radius: 20px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);">
      <div class="card-body text-center">
        <h6 class="mb-4" style="font-family: 'Arial', sans-serif; color: #0056b3;">Calculadora V2</h6>
        <div class="mb-3">
          <input type="text" class="form-control text-right" v-model="display" disabled style="font-size: 24px; padding: 10px; border-radius: 10px; border: 1px solid #0056b3; background-color: #ffffff;">
        </div>
        <div class="button-grid">
          <button class="btn btn-light" @click="agregarNumero('%')">%</button>
          <button class="btn btn-warning" @click="LimpiarDisplay">CE</button>
          <button class="btn btn-warning" @click="LimpiarDisplay">C</button>
          <button class="btn btn-danger" @click="eliminarNumero">B</button>

          <button class="btn btn-secondary" @click="agregarNumero(9)">9</button>
          <button class="btn btn-secondary" @click="agregarNumero(8)">8</button>
          <button class="btn btn-secondary" @click="agregarNumero(7)">7</button>
          <button class="btn btn-danger" @click="agregarNumero('/')">/</button>

          <button class="btn btn-secondary" @click="agregarNumero(4)">4</button>
          <button class="btn btn-secondary" @click="agregarNumero(5)">5</button>
          <button class="btn btn-secondary" @click="agregarNumero(6)">6</button>
          <button class="btn btn-danger" @click="agregarNumero('x')">x</button>

          <button class="btn btn-secondary" @click="agregarNumero(1)">1</button>
          <button class="btn btn-secondary" @click="agregarNumero(2)">2</button>
          <button class="btn btn-secondary" @click="agregarNumero(3)">3</button>
          <button class="btn btn-danger" @click="agregarNumero('-')">-</button>

          <button class="btn btn-primary" @click="calculo">=</button>
          <button class="btn btn-secondary" @click="agregarNumero(0)">0</button>
          <button class="btn btn-secondary" @click="agregarNumero('.')">.</button>
          <button class="btn btn-danger" @click="agregarNumero('+')">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .button-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .btn {
    width: 100%;
    height: 50px;
    font-size: 18px;
    border-radius: 10px;
    transition: background-color 0.3s, transform 0.3s;
  }

  .btn:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
  }

  .btn:active {
    background-color: #c8c8c8;
  }

  .btn-light {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
  }

  .btn-warning {
    background-color: #f0ad4e;
    color: white;
  }

  .btn-danger {
    background-color: #d9534f;
    color: white;
  }

  .btn-primary {
    background-color: #0275d8;
    color: white;
  }

  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }
</style>
