<template>
  <div class="widget">
    <h2 class="!label-text">Brewing Method</h2>
    <!-- brew method buttons -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-x-[0.4rem] gap-[0.5rem]">
      <button v-for="item in ratios"
        :class="['btn light-blue flex flex-col  gap-[0.25rem] justify-center items-center', { 'active': brewMethod.name === item.name }]"
        @click="brewMethod = item">
        <IconSquare class="h-[12px] w-[12px]" />
        <span class="font-[700] text-[0.75rem]">{{ item.name }}</span>
      </button>
    </div>
    <!-- selected brew method -->
    <div class="border-btn bg-red text-white p-[0.5rem]">
      <div class="text-center">
        <p class="font-[700]">{{ brewMethod.name }}</p>
        <p class="text-[0.85rem]">Recomended Ratio 1:{{ brewMethod.ratio }}</p>
      </div>
    </div>
    <!-- inputs -->
    <div class="flex gap-[18px]">
      <div class="input-field">
        <label class="input-label">Water</label>
        <div class="input-with-unit">
          <input type="number" step="1" v-model="milliliters" @input="updateCoffeeFromWater" />
          <span class="unit">ml</span>
        </div>
      </div>
      <div class="flex 
    items-center justify-center pt-[20px]">
        <div class="border-[2px] rounded-full h-[36px] w-[36px] flex items-center justify-center bg-light-green">
          <IconSquare class="h-[12px] w-[12px]" />
        </div>
      </div>
      <div class="input-field">
        <label class="input-label">Coffee</label>
        <div class="input-with-unit">
          <input type="number" step="1" v-model="grams" @input="updateWaterFromCoffee" />
          <span class="unit">g</span>
        </div>
      </div>
    </div>
    <div class="border-btn bg-dark-purple text-white p-[0.5rem] py-[1.25rem] mt-[20px]">
      <div class="text-center">
        <div v-if="grams < 1 || milliliters < 1" class="h4">-</div>
        <div v-else class="h4">{{ grams }} of coffee for {{ milliliters }} ml of water</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onBeforeMount } from 'vue'
import { ratios } from '@/lib/data'

import IconSquare from '@/components/icons/IconSquare.vue';

// Refs
const brewMethod = ref(null);
const grams = ref(0);
const milliliters = ref(0);

// Methods
const updateWaterFromCoffee = () => {
  milliliters.value = Math.round(grams.value * brewMethod.value.ratio);
}
const updateCoffeeFromWater = () => {
  grams.value = Math.round(milliliters.value / brewMethod.value.ratio);
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
  brewMethod.value = ratios[0];
  // milliliters.value = 500;
});
</script>
