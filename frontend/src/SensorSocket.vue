<script setup>
const emit = defineEmits(['response'])

emit('response', 'hello from child')
</script>

<template>
  <h2>Need to open a websocket and emit the data back up to the app</h2>
</template>