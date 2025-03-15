<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<RouterView />
<footer>
  <a href="https://github.com/kikkipedia" target="_blank">CODE</a>
</footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: black;
  text-align: center;
}

footer a {
  color: black;
}
</style>
