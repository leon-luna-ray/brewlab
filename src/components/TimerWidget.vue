<template>
    <div class="widget shadow-red">
        <h2 class="!label-text">Timer</h2>
        <div class="flex flex-col gap-[0.75rem]">
            <p class="text-center text-[1.5rem] font-bold">{{ formattedTime }}</p>
            <button class="btn light-purple" @click="startTimer">Start</button>
            <button class="btn light-purple" @click="stopTimer">Stop</button>
            <button class="btn light-purple" @click="resetTimer">Reset</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const formattedTime = ref('00:00');
const startTimer = () => {};
const stopTimer = () => {};
const resetTimer = () => {};
</script>