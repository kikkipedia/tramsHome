<script setup lang="ts">
</script>

<template>
    <div class="logo">
      TRAMS AB
    </div>
    <div class="flux">
      Årets sommarspel börjar snart!
    </div>
</template>
 
<style scoped>
.logo {
  max-height: 100vh;
  font-family: "Tilt Prism", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 72px;
  padding-top: 150px;
}

.logo {
  color: #FB4264;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #F40A35;
  animation: neon 2s ease infinite;
  -moz-animation: neon 2s ease infinite;
  -webkit-animation: neon 2s ease infinite;
}

@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
    color: #FED128;
  }
  50% {
    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
    color: #806914;
  }
}

.flux {
  font-family: "Chakra Petch", serif;
  font-weight: 300;
  padding-top: 50px;
  font-size: 18px;
  line-height: 36px;
  animation: flux 5s linear infinite;
  -moz-animation: flux 5s linear infinite;
  -webkit-animation: flux 5s linear infinite;
  -o-animation: flux 5s linear infinite;
}

@keyframes flux {
  0%,
  100% {
    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #146C80;
  }
}

</style>