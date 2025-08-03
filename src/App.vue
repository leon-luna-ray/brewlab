<template>
  <Header />
  <main>
    <div class="container flex flex-col justify-center items-center gap-y-[1rem]">
      <RatioWidget />
      <!-- <TimerWidget /> -->
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
