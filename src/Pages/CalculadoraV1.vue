<script>
export default{
    data() {
        return {
            numero1: 0,
            numero2: 0,
            resultado: 0,
        }
    },
    methods:{
        sumar(){
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        },
        resta(){
            this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
        },
        multiplicar(){
            this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
        },
        dividir(){
            this.resultado = this.numero2 != 0 ? parseFloat(this.numero1) / parseFloat(this.numero2) : 'Error';
        }
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="card shadow p-4">
            <h1 class="text-center">Calculadora V1</h1>
            <div class="mb-3 text-center">
                <h2 class="display-4 border p-3 rounded bg-success text-white">{{ resultado }}</h2>
            </div>
            <div class="mb-3">
                <label for="">Numero 1</label>
                <input type="number" class="form-control" v-model="numero1">
            </div>
            <div class="mb-3">
                <label for="">Numero 2</label>
                <input type="number" class="form-control" v-model="numero2">
            </div>
            <div class="d-flex justify-content-center gap-1">
                <button @click="sumar" class="btn btn-danger btn-sm">Sumar</button>
                <button @click="resta" class="btn btn-warning btn-sm">Restar</button>
                <button @click="multiplicar" class="btn btn-success btn-sm">Multiplicar</button>
                <button @click="dividir" class="btn btn-primary btn-sm">Dividir</button>
            </div>
        </div>
    </div>
</template>