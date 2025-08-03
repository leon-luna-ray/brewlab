<template>
  <div class="widget">
    <div class="flex flex-col gap-[0.75rem]">

      <h2 class="!label-text">Brewing Method</h2>
      <!-- brew method buttons -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-[0.4rem] gap-[0.5rem]">
        <button v-for="item in ratios"
          :class="['btn light-blue flex flex-col  gap-[0.25rem] justify-center items-center', { 'active': brewMethod.name === item.name }]"
          @click="brewMethod = item">
          <IconSquare class="h-[12px] w-[12px]" />
          <div class="flex flex-col">
            <span class="font-[700] text-[0.75rem]">{{ item.name }}</span>
            <span class="text-[0.75rem]">1:{{ item.ratio }}</span>
          </div>
        </button>
      </div>
    </div>

    <!-- size presets -->
    <div class="flex flex-col gap-[0.75rem]">
      <h2 class="!label-text">Size</h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-[0.4rem] gap-[0.5rem]">
        <button v-for="(item, index) in sizePresets"
          :class="['btn light-blue flex flex-col  gap-[0.25rem] justify-center items-center', { 'active': sizePresetIndex === index }]"
          @click="handleSizePresetClick(index)">
          <span class="font-[700] text-[0.75rem]">{{ item.name }}</span>
        </button>
      </div>
    </div>
    <!-- inputs -->
    <div class="flex gap-[18px]">
      <div class="input-field">
        <label class="input-label">Water</label>
        <div class="input-with-unit">
          <input type="number" step="1" v-model="milliliters" @input="updateCoffeeFromWater"
            @click="handleInputClick" />
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
          <input type="number" step="1" v-model="grams" @input="updateWaterFromCoffee" @click="handleInputClick" />
          <span class="unit">g</span>
        </div>
      </div>
    </div>
    <!-- selected brew method -->
    <div class="border-btn bg-red text-white p-[0.5rem] py-[1.25rem] mt-[20px]">
      <div class="text-center flex flex-col gap-[0.25rem]">
        <div class="flex flex-col">
          <p class="font-[600] body-text-2 leading-[110%]">{{ brewMethod.name }}</p>
          <p class="text-[0.85rem]">Recomended Ratio 1:{{ brewMethod.ratio }}</p>
        </div>
        <div class="flex flex-col">
          <p v-if="grams < 1 || milliliters < 1" class="body-text-2">-</p>
          <p v-else class="body-text-2">{{ grams }}g of coffee for {{ milliliters }}ml of water</p>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onBeforeMount, onMounted } from 'vue'
import { ratios } from '@/lib/data'

import IconSquare from '@/components/icons/IconSquare.vue';

const sizePresets = [
  { name: '1 Cup ', value: 240 },
  { name: '2 Cups', value: 480 },
  { name: '4 Cups', value: 960 },
  { name: '8 Cups', value: 1920 }
]

// Refs
const grams = ref(0);
const sizePresetIndex = ref(0);
const brewMethod = ref(null);
const milliliters = ref(0);

// Methods
const updateWaterFromCoffee = () => {
  milliliters.value = Math.round(grams.value * brewMethod.value.ratio);
}
const updateCoffeeFromWater = () => {
  grams.value = Math.round(milliliters.value / brewMethod.value.ratio);
}
const handleSizePresetClick = (index) => {
  sizePresetIndex.value = index;
  milliliters.value = sizePresets[index].value;
  updateCoffeeFromWater();
}

const handleInputClick = () => {
  sizePresetIndex.value = null;
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

onMounted(() => {
  if (sizePresetIndex.value !== undefined) {
    milliliters.value = sizePresets[sizePresetIndex.value].value;
    updateCoffeeFromWater();
  }
});
</script>
