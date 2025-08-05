<template>
  <Header />
  <main>
    <div class="container flex flex-col justify-center items-center gap-y-[1rem]">
      <RatioWidget />
      <TimerWidget />
    </div>
  </main>
  <Footer />
</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue'
import { ratios } from '@/lib/data'

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import RatioWidget from '@/components/RatioWidget.vue';
import TimerWidget from '@/components/TimerWidget.vue';

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