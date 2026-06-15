<script setup lang="ts">
import {ref} from 'vue';

const emit = defineEmits(['response']);
emit('response', 'hello from child');

const output = ref('waiting for connection');

const port = ":8080";

function connectToSocket () {
  if (window["WebSocket"]) {
      try {
        const conn = new WebSocket("ws://" + document.location.hostname + port + "/ws");
        console.log(conn);
        conn.onclose = function () {
            output.value = 'connection closed';
        };
        conn.onmessage = function (evt) {
            var messages = evt.data.split('\n');
            console.log('evt.data', evt.data);
            output.value = messages[0];
        };
      } catch (error) {
        console.log(error);
        output.value = 'Error connection to websocket, see console';
      };
  } else {
      output.value = 'browser doesn\'t support sockets';
  }
}

</script>

<template>
  <h2>Need to open a websocket and emit the data back up to the app</h2>
  <button @click="connectToSocket">Connect</button>
  <div>
    <span>Output:</span>
    <span>{{ output }}</span>
  </div>
</template>