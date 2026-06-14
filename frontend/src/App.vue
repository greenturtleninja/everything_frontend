<script setup lang="ts">
import { ref } from 'vue';
import SensorSocket from './SensorSocket.vue';

const childMsg = ref('No child msg yet')

function rectangle() {
  const canvas = <HTMLCanvasElement> document.getElementById("sensor");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "green";
      ctx.fillRect(10, 10, 150, 100);
    }
  }
}

function showCanvas() {
  const canvas = <HTMLCanvasElement> document.getElementById("sensor");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath();
        ctx.moveTo(60, 40);
        ctx.lineTo(180, 90);
        ctx.lineTo(130, 210);
        ctx.lineTo(10, 160);
        ctx.closePath();
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.strokeStyle = "lightgray";
      for (let i = 0; i < 16; i++) {
        ctx.moveTo(i * 20, 0);
        ctx.lineTo(i * 20, 300);
        ctx.moveTo(0, i * 20);
        ctx.lineTo(300, i * 20);
        ctx.stroke();
      }
    }
  }
}
</script>

<template>
  <h1>Sensor Output</h1>
  <SensorSocket @response="(msg) => childMsg = msg"/>
  {{ childMsg }}
  <button @click="rectangle">Sensor</button>
  <button @click="showCanvas">Test Canvas</button>
  <br />
  <canvas id="sensor" width="1500" height="1500" style="border:1px solid #000000;"></canvas>
</template>

<style scoped></style>
