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
import { useHead } from '@unhead/vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import RatioWidget from '@/components/RatioWidget.vue';
import TimerWidget from '@/components/TimerWidget.vue';

useHead({
  title: 'Brew Lab | Coffee Ratio Calculator',
  meta: [
    { name: 'description', content: 'A simple coffee ratio calculator.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
    { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png' },
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '36x36', href: '/favicons/android-icon-36x36.png' },
    { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicons/android-icon-48x48.png' },
    { rel: 'icon', type: 'image/png', sizes: '72x72', href: '/favicons/android-icon-72x72.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/android-icon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/favicons/android-icon-144x144.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-icon-192x192.png' },
    { rel: 'manifest', href: '/favicons/manifest.json' },
  ],
});
</script>
