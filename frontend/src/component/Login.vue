<script setup lang="ts">
import { ref } from "vue";

const username = ref('Username');
const password = ref ('##########');

const loginUrl: string = 'https://localhost:8080/login';

type LoginUser = {
    username: string;
    password: string;
    token?: string;
} 

async function login() {
    const loginUser: LoginUser = {
        username: username.value,
        password: password.value,
    };

    const token: Response = await fetch(loginUrl, {
        method: 'POST',
        body: JSON.stringify(loginUser)
    });
}

</script>
<template>
    <div>
        <h3>Password:</h3>
        <input v-model="username" placeholder="Username">
    </div>
    <div>
        <h3>Password:</h3>
        <input v-model="password" placeholder="############">
    </div>
    <div>
        <button @click="login" >Login</button>
    </div>
</template>