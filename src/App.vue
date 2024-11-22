<script setup lang="ts">
import { ref } from 'vue'

const peso = ref<number | null>(null)
const minProteina = ref(0)
const maxProteina = ref(0)

function calcularProteina() {
  if (peso.value) {
    minProteina.value = peso.value * 1.6
    maxProteina.value = peso.value * 1.8
  }
  peso.value = null
}
</script>

<script lang="ts">
export default {
  data() {
    return {
      config: {
        masked: false,
        suffix: '',
        thousands: '.',
        decimal: ',',
        precision: 1,
        disableNegative: true,
        disabled: false,
        min: 0,
        max: 999,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
        shouldRound: false,
        focusOnRight: false,
      },
    }
  },
}
</script>

<template>
  <header class="custom-header text-white py-3">
    <div class="container">
      <div class="d-flex justify-content-center">
        <img src="/UNIFESO.png" alt="Logo" class="img-fluid" style="height: 40px" />
      </div>
    </div>
  </header>

  <div class="container my-5">
    <h1 class="text-center mb-4">Quantidade de proteína diária</h1>
    <form @submit.prevent="calcularProteina">
      <div class="mb-3">
        <label for="peso" class="form-label">Insira o peso do paciente</label>
        <money3 class="form-control" id="peso" v-model="peso" v-bind="config"></money3>
      </div>

      <button type="submit" class="btn btn-primary w-100">Calcular</button>
    </form>

    <div class="text-center mb-4" v-if="minProteina && maxProteina">
      <br />
      <h3>
        De <b>{{ minProteina.toFixed(2) }}g</b>
      </h3>
      <br />
      <h3>
        a <b> {{ maxProteina.toFixed(2) }}g</b>
      </h3>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: 'Gotham Light';
  src: url('../src/assets/fonts/GothamLight.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Gotham Light', Arial, sans-serif;
}

.custom-header {
  background-color: #2d6c64;
}

.form-control:focus {
  border-color: #2d6c64;
  box-shadow: none;
}

.btn-primary {
  background-color: #2d6c64;
  border-color: #2d6c64;
}

.btn-primary:focus,
.btn-primary:active,
.btn-primary:hover {
  outline: none;
  box-shadow: none;
  background-color: #cccccc;
  border-color: #cccccc;
}
</style>
