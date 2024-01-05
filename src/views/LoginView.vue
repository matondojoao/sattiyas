<script setup>
import { reactive } from 'vue';
import http from '@/services/http.js'
import {userAuth} from '@/stores/auth.js'
const auth = userAuth();
import {useRouter} from 'vue-router';

const router = useRouter ();

const userLogin = reactive({
  email: "matondojoaokitemoco@gmail.com",
  password: "@matondo@joao115022",
  device_name: "axios",
});

const userRegister = reactive({
  email: "",
  password: "",
  device_name: "axios",
});

async function login() {
  try {
    const response = await http.post("/auth/login", userLogin);
    auth.setToken(response.data.token);
    console.log("Resposta do servidor:", response.data.token);
    http.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    router.push('/lista-de-desejos');
  } catch (error) {
    console.log('Erro na resposta do servidor' + error);
  }
}

async function register() {
  try {
    const response = await http.post("/auth/register", userRegister);
    auth.setToken(response.data.token);
    console.log("Resposta do servidor:", response.data.token);
    http.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    router.push('/lista-de-desejos');
  } catch (error) {
    console.log('Erro na resposta do servidor' + error);
  }
}

</script>

<template>
    <div class="cs_height_140 cs_height_lg_80"></div>
    <div class="container">
      <div class="login-section">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <label for="loginUsername">Email:</label>
          <input type="email" id="loginUsername" v-model="userLogin.email" required>
  
          <label for="loginPassword">Senha:</label>
          <input type="password" id="loginPassword" v-model="userLogin.password" required>
  
          <button type="submit">Entrar</button>
        </form>
      </div>
  
      <div class="register-section">
        <h2>Cadastrar</h2>
        <form @submit.prevent="register">
          <label for="registerUsername">Nome de Usuário:</label>
          <input type="text" id="registerUsername" v-model="userRegister.name" required>
  
          <label for="registerEmail">E-mail:</label>
          <input type="email" id="registerEmail" v-model="userRegister.email" required>
  
          <label for="registerPassword">Senha:</label>
          <input type="password" id="registerPassword" v-model="userRegister.password" required>
  
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
    <div class="cs_height_110 cs_height_lg_50"></div>
    <hr>

  </template>
  