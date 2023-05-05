<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'wangSizhu' },
    { name: 'description', content: 'wangSizhu\'s Portfolio' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@kriszu0504' },
  ],
})
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>
