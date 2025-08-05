<template>
    <div class="widget shadow-red">
        <h2 class="!label-text text-center">Timer</h2>
        <div class="flex flex-col gap-[0.75rem]">
            <p class="text-center text-[4rem] font-jockey-one">{{ formattedTime }}</p>
            <div class="flex gap-[1rem] justify-center">
                <button class="btn min-w-[100px] bg-light-green flex justify-center items-center gap-[0.25rem]" @click="handleTimerClick">
                    <IconSquare class="h-[12px] w-[12px]" />
                    <p class="label-text">{{ isTimerRunning ? 'Pause' : 'Start' }}</p>
                </button>
                <button class="btn min-w-[100px] bg-red text-white flex justify-center items-center gap-[0.25rem]" @click="resetTimer">
                    <IconSquare class="h-[12px] w-[12px]" />
                    <p class="label-text">Reset</p>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import IconSquare from '@/components/icons/IconSquare.vue';

const formattedTime = ref('00:00');
const timerInterval = ref(null);
const isTimerRunning = ref(false);
const seconds = ref(0); // Track elapsed seconds

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const startTimer = () => {
    if (isTimerRunning.value) return;

    isTimerRunning.value = true;

    timerInterval.value = setInterval(() => {
        seconds.value++;
        formattedTime.value = formatTime(seconds.value);
    }, 1000);
};

const handleTimerClick = () => {
    if (isTimerRunning.value) {
        clearInterval(timerInterval.value);
        isTimerRunning.value = false;
    } else {
        startTimer();
    }
};

const resetTimer = () => {
    clearInterval(timerInterval.value);
    seconds.value = 0;
    formattedTime.value = '00:00';
    isTimerRunning.value = false;
};
</script>