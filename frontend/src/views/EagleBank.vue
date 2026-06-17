<script setup lang="ts">
import { ref } from 'vue';
import Login from '../component/Login.vue';
import Accounts from '../component/Accounts.vue';
import User from '../component/User.vue';


const displayItem = ref('hello');

function showComponent(component: string) {
    displayItem.value = component;
}

</script>
<template>
    <div>
        <h2 @click="showComponent('login')">Login</h2>
        <Login v-if="displayItem=='login'"></Login>
    </div>
    <div>
        <h2 @click="showComponent('accounts')">Accounts</h2>
        <Accounts v-if="displayItem=='accounts'"></Accounts>
    </div>
    <div>
        <h2 @click="showComponent('user')">User</h2>
        <User v-if="displayItem=='user'"></User>
    </div>
</template>