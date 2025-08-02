<template>
  <div class="widget">
    <h2>Ratio Calculator</h2>
    <!-- <div class="container py-8 flex-col-2 items-center">
      <div class="title">
        <h1 class="text-center">Coffee Ratio Calculator</h1>
      </div>
      <div class="flex gap-2 justify-center md:w-[50%] flex-wrap">
        <button v-for="item in ratios" :class="['btn zoom-in-out', { 'active': brewMethod.name === item.name }]"
          @click="brewMethod = item">
          <span>{{ item.name }}</span>
        </button>
      </div>
      <div class="text-center">
        <h2>1:{{ brewMethod.ratio }}</h2>
        <span>Ratio</span>
      </div>
      <div class="fields flex flex-col md:flex-row justify-center gap-16">
        <div>
          <div class="input-field">
            <input type="number" v-model="grams" @input="updateCoffeeFromWater" /> <span>g</span>
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
    </div> -->
  </div>
</template>
<script setup>
import { ref, watch, onBeforeMount } from 'vue'
import { ratios } from '@/lib/data'

// Refs
const brewMethod = ref(null);
const grams = ref(0);
const milliliters = ref(0);

// Methods
const updateWaterFromCoffee = () => {
  milliliters.value = grams.value * brewMethod.value.ratio;
}
const updateCoffeeFromWater = () => {
  grams.value = milliliters.value / brewMethod.value.ratio;
}

// Watchers
watch(brewMethod, () => {
  if (milliliters.value) {
    updateCoffeeFromWater();
  } else if (grams.value) {
    updateWaterFromCoffee();
  }
});

// Lifecycle
onBeforeMount(() => {
  brewMethod.value = ratios[6];
  milliliters.value = 500;
});
</script>
