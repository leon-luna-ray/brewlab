<template>
  <div class="flex flex-col justify-between h-screen">
    <main>
      <div class="container py-[1rem] lg:py-[2rem] flex-col-1 lg:flex-col-2 items-center">
        <div class="title">
          <h1 class="text-center">Coffee Ratio Calculator</h1>
        </div>
        <div class="flex-col-2">
          <div class="grid grid-cols-3 gap-[0.5rem]">
            <button v-for="item in ratios" :class="['btn zoom-in-out', { 'active': brewMethod.name === item.name }]"
              @click="brewMethod = item">
              <span>{{ item.name }}</span>
            </button>
          </div>
          <div class="text-center flex flex-col items-center gap-y-[0.25rem]">
            <span class="uppercase">Ratio</span>
            <h2>1:{{ brewMethod.ratio }}</h2>
          </div>
        </div>

        <div class="fields flex flex-col md:flex-row justify-center gap-[1rem] lg:gap-[4rem]">
          <div>
            <div class="input-field">
              <input type="number" v-model="grams" @input="updateWaterFromCoffee" /> <span>g</span>
            </div>
            <span class="input-label">Coffee</span>
          </div>
          <div>
            <div class="input-field">
              <input type="number" v-model="milliliters" @input="updateCoffeeFromWater" /> <span>ml</span>
            </div>
            <span class="input-label">Water</span>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue'
import { ratios } from '@/lib/data'
import Footer from '@/components/Footer.vue';

// Refs
const brewMethod = ref(null);
const grams = ref(0);
const milliliters = ref(0);
const lastModified = ref('water');

// Methods
const updateWaterFromCoffee = () => {
  lastModified.value = 'coffee';
  milliliters.value = parseFloat((grams.value * brewMethod.value.ratio).toFixed(1));
}

const updateCoffeeFromWater = () => {
  lastModified.value = 'water';
  grams.value = parseFloat((milliliters.value / brewMethod.value.ratio).toFixed(1));
}

// Watchers
watch(brewMethod, () => {
  if (lastModified.value === 'coffee') {
    updateWaterFromCoffee();
  } else {
    updateCoffeeFromWater();
  }
});

// Lifecycle
onBeforeMount(() => {
  brewMethod.value = ratios[6];
  milliliters.value = 500;
  lastModified.value = 'water';
});
</script>