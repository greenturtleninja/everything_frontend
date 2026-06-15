<script setup lang="ts">
</script>

<template>
  <h1>Test Stuff</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Home</RouterLink> --
    <RouterLink to="/sensor">Sensor</RouterLink> --
    <RouterLink to="/eagle">Eagle Bank</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
