<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<RouterView />
<footer>
  <a href="github.com/kikkipedia">GitHub</a>
</footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;
  text-align: center;
}

footer a {
  color: white;
}
</style>
