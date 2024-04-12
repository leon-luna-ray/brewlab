<template>
  <main>
    <div class="container py-[2rem] flex-col-2 items-center">
      <div class="title">
        <h1 class="text-center">Coffee Ratio Calculator</h1>
      </div>
      <div class="flex gap-[0.5rem] justify-center md:w-[50%] flex-wrap">
        <button v-for="item in ratios" 
                :class="['btn zoom-in-out', {'active': brewMethod.name === item.name }]" 
                @click="brewMethod = item">
          <span>{{ item.name }}</span>
        </button>
      </div>
      <div class="fields flex justify-center gap-[4rem]">
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
import { ref, watch, onBeforeMount } from 'vue'
import { ratios } from '@/lib/data'

const grams = ref(0);
const milliliters = ref(0);
const ratio = ref(16);
const brewMethod = ref(null);

const updateWaterFromCoffee = () => {
  milliliters.value = grams.value * ratio.value;
}

const updateCoffeeFromWater = () => {
  grams.value = milliliters.value / ratio.value;
}

watch(grams, updateWaterFromCoffee);
watch(milliliters, updateCoffeeFromWater);
watch(brewMethod, (value) => {
  console.log(value);
});

onBeforeMount(() => {
  brewMethod.value = ratios[6];
});
</script>
