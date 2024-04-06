<template>
  <main>
    <div class="container py-[2rem]">
      <h1 class="text-center">Coffee Ratio Calculator</h1>
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
  </main>
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
