<template>
  <div>
    <h1>Coffee Ratio Calculator</h1>
    <span>Pour over (1:16)</span>
    <div class="fields">
      <div>
        <h2>Coffee</h2>
        <input type="number" v-model="grams" @input="updateWaterFromCoffee" /> g
      </div>
      <div>
        <h2>Water</h2>
        <input type="number" v-model="milliliters" @input="updateCoffeeFromWater" /> ml
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const grams = ref(0);
const milliliters = ref(0);
const ratio = ref(16);

const updateWaterFromCoffee = () => {
  milliliters.value = grams.value * ratio.value;
}

const updateCoffeeFromWater = () => {
  grams.value = milliliters.value / ratio.value;
}

watch(grams, updateWaterFromCoffee);
watch(milliliters, updateCoffeeFromWater);
</script>

<style>
.fields {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
} 
</style>
