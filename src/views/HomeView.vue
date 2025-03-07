<template>
    <div class="header">
    <span class="fixed-text logo">TRAMS AB </span><br/>
    <span class="fixed-text">{{ todaysDate }} {{ shortZone }} {{ webTime }}</span>
    <marquee class ="marquee" behavior="scroll" direction="left">
      Årets sommarspel är under uppbyggnad & kommer i vår
    </marquee>
    <span class="fixed-text">For we have not yet played our last card &#128270</span>
  </div>
  <div class="image">
    <img src="@/assets/map.png" alt="Map of the world" class="map"/>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

const todaysDate = ref(new Date().toDateString()) 
const webTime = ref(new Date().toLocaleTimeString())
const shortZone = ref('')

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
.header {
  display: block;
  width: 75%;
  background-color: #e7e7e7;
  background-image: url("data:image/svg+xml;utf8,<svg width='2' height='2' viewBox='0 0 2 2' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='1' cy='1' r='0.85' fill='black' /></svg>");
  font-family: 'VT323', monospace;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px;
  overflow: hidden;
  border: 7px solid black;
  padding: 10px;
  color: #e7e7e7
}

/* Fixed text stays in place */
.fixed-text {
  flex-shrink: 0;
  margin-right: 20px;
  color: #e7e7e7;
}

/* Rolling text animation */
.marquee {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.marquee span {
  display: inline-block;
  padding-right: 50px;
  animation: marquee 5s linear infinite;
}

.map {
  width: 200px;
}

.image {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
 
