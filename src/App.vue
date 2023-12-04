<script setup>
import { reactive } from 'vue';

const estado = reactive({
  a: 0,
  b: 0,
  operacao: '+', 
  resultado: 0,
});

function resultado(){
  const {a, b, operacao} = estado;
  const numeroA = parseFloat(a);
  const numeroB = parseFloat(b);

  if (operacao === '-'){
    return numeroA - numeroB;
  } else if (operacao === '+'){
    return numeroA + numeroB;
  } else if (operacao === '*') {
    return numeroA * numeroB;
  } else if (operacao === '/') {
    return numeroA / numeroB;
  } else {
    return 0;
  }
}

</script>

<template>
  <h1>Calculadora</h1>
  <div>
    {{ estado.a }}
    <input type="number" @keyup="evento => estado.a = evento.target.value">
    {{ estado.b }}
    <input type="number" @keyup="evento => estado.b = evento.target.value">
    <select @change="evento => estado.operacao = evento.target.value">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    {{ estado.operacao }}
    <h2>{{ resultado() }}</h2>
    
  </div>
</template>

<style scoped>
</style>