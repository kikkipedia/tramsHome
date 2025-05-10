<template>
    <div class="container">
      <div class="images shadow">
        <img src="@/assets/tramsAb.jpg" alt="Logo" class="logo"/>
        <img src="@/assets/map.png" alt="map" class="map"/>
      </div>
      <div class="header">
        <!-- <span class="fixed-text trams-green">TRAMS AB </span> -->
        <span class="fixed-text">{{ todaysDate }} {{ shortZone }} {{ webTime }}</span>
        <div class="marquee-container">
          <div class="marquee">
            <span>Årets sommarspel börjar i maj</span>
          </div>
        </div>
      </div>
      
    </div>
<!--   <div class="image">
    <img src="@/assets/map.png" alt="Map of the world" class="map "/>
  </div> -->

<!--   <div class="blinking" v-if="!isOpenReg">
    <p class="trams-green">Would you like to play the game? (Y/N)</p>
    <p class="trams-green">&gt;<span class="blink trams-green">_ (Y) useradd </span>
      
      <span class="pink-box" @click="openReg">registrera</span></p>
    <div id="interlaced"></div>  
    <div id="glare"></div>
    
</div>
<div v-else class="openReg">
      <Register v-if="isOpenReg"> </Register>
</div> -->
</template>

<script setup lang="ts">
import Register from '@/components/Register.vue'
import { onMounted, ref, onUnmounted } from 'vue'

const todaysDate = ref(new Date().toDateString()) 
const webTime = ref(new Date().toLocaleTimeString())
const shortZone = ref('')
const isOpenReg = ref(false)

// Function to update the time every second
const updateTime = () => {
  webTime.value = new Date().toLocaleTimeString()
}

// Get the short timezone on mount
const getShortZone = () => {
  const timeZonePart = new Intl.DateTimeFormat('en', { timeZoneName: 'short' })
    .formatToParts(new Date())
    .find(part => part.type === 'timeZoneName');
  
  shortZone.value = timeZonePart ? timeZonePart.value : ''
}

// Start ticking time when component mounts
let intervalId: number | null = null;
onMounted(() => {
  getShortZone(); // Set timezone once
  intervalId = setInterval(updateTime, 1000) as unknown as number; // Update time every second
})

// Clean up interval when component unmounts
onUnmounted(() => {
  if (intervalId !== null) clearInterval(intervalId);
})

</script>
 
<style scoped>
*, *::before, *::after {
  box-sizing: border-box;
}

.container {
  display: flex;
  padding-top: 50px;
  flex-wrap: wrap;
}
.header {
  width: 100%;
  background-color: #e7e7e7;
  background-image: url("data:image/svg+xml;utf8,<svg width='2' height='2' viewBox='0 0 2 2' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='1' cy='1' r='0.85' fill='black' /></svg>");
  font-family: 'VT323', monospace;
  font-size: 6vw;
  text-transform: uppercase;
  padding: 4px;
  overflow: hidden;
  border: 5px solid black;
  color: #e7e7e7;
  display: flex;
  flex-direction: column;
  flex: 1 1 80%;
  box-shadow: #ffbdff;
}

.shadow  {
    transition: box-shadow .1s ease-in-out;
    transition-behavior: normal;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: box-shadow;
    box-shadow: 0 2px 15px rgba(0,0,0, .25);
}

.fixed-text {
  color: #e7e7e7;
}

.marquee-container {
  width: 100%;
  position: relative;
  white-space: nowrap;
}

.marquee {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s steps(30) infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

#overlay {
  width: 80%;
}

.logo {
  max-width: 75%;
  display: flex;
  justify-content: center;
  
}
.images {
  max-width: 100%;
  display: flex;
  justify-content: center;
  border: 5px solid #6900FF;
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: white;
}

.map {
  max-width: 25%;
  padding: 5px;
}
.image {
  max-width: 35%;
  display: flex;
  justify-content: center;
}

.blink_img {
  animation: blinker 2s linear infinite;
}
@keyframes blinker {
  50% { opacity: 0; }
}

.pink-box {
  background-color: #ffbdff;
  color: #6900FF;
  font-size: 16px;
  font-family: 'Saira', sans-serif;
  width: 100%;
  text-align: center;
  margin-left: 10px;
  padding: 3px;
}

/* on hover - make border */
.pink-box:hover {
  border: 3px solid #6900FF;
  cursor: pointer;
}

.blinking {
  width: 90%;
  margin-top: 20px;
}

p {
  font-family: 'incosolata', monospace;
  font-size: 18px;
  background-color: black;
  padding: 10px;
}

#glare {
    position: fixed;
    height: 150px;
    z-index: -1; /* ensure the effect doesn't cover the text */
    background: radial-gradient(hsl(154 5% 15%) 0%, hsl(154 50% 5%) 70%);
  }

  @keyframes lines {
    0% {background-position: 0px 0px}
    50% {background-position: 0px 0px}
    51% {background-position: 0px 2px}
    100% {background-position: 0px 2px}
  }

  #interlaced {
    position: fixed;
    background: repeating-linear-gradient(transparent 0px 1px, hsl(154 0% 0%/.3) 3px 4px);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    pointer-events: none;
    animation: lines 0.066666666s linear infinite;
  }

  @keyframes blink {
    0% {opacity: 0}
    30% {opacity: 1}
    70% {opacity: 1}
    100% {opacity: 0}
  }

  .blink {
    animation: blink 0.4s linear infinite;
  }

  .openReg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

</style>
 
