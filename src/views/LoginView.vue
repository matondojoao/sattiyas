<script setup>
import { reactive } from 'vue';
import http from '@/services/http.js'
import {userAuth} from '@/stores/auth.js'
const auth = userAuth();

const user = reactive({
  email: "matondojoaokitemoco@gmail.com",
  password: "@matondo@joao115022",
  device_name: "axios",
});

async function login() {
  try {
    const response = await http.post("/auth/login", user);
    auth.setToken(response.data.token)
    auth.checkToken()
    console.log("Resposta do servidor:", response.data.token);
    // router.push('/dashboard')
  } catch (error) {
    console.log('Erro na resposta do servidor' + error);
  }
}

const register = () => {
  // Implemente a lógica de cadastro aqui
  console.log('Cadastrando...');
};
</script>

<template>
    <div class="cs_height_140 cs_height_lg_80"></div>
    <div class="container">
      <div class="login-section">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <label for="loginUsername">Email:</label>
          <input type="email" id="loginUsername" v-model="user.email" required>
  
          <label for="loginPassword">Senha:</label>
          <input type="password" id="loginPassword" v-model="user.password" required>
  
          <button type="submit">Entrar</button>
        </form>
      </div>
  
      <div class="register-section">
        <h2>Cadastrar</h2>
        <form @submit.prevent="register">
          <label for="registerUsername">Nome de Usuário:</label>
          <input type="text" id="registerUsername" v-model="registerUsername" required>
  
          <label for="registerEmail">E-mail:</label>
          <input type="email" id="registerEmail" v-model="registerEmail" required>
  
          <label for="registerPassword">Senha:</label>
          <input type="password" id="registerPassword" v-model="registerPassword" required>
  
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
    <div class="cs_height_110 cs_height_lg_50"></div>
    <hr>

  </template>
  