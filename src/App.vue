<template>
  <Header />
  <main>
    <div class="container flex flex-col justify-center items-center gap-[1.25rem]">
      <RatioWidget />
      <TimerWidget />
    </div>
  </main>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import RatioWidget from '@/components/RatioWidget.vue';
import TimerWidget from '@/components/TimerWidget.vue';
</script>
