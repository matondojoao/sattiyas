import { defineStore } from 'pinia'
import { ref } from 'vue';
import http from "../services/http.js";

export const userAuth = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token'));
    const user = ref(JSON.parse(localStorage.getItem('user')));

    function setToken(tokenValue) {
        localStorage.setItem('token', tokenValue)
        token.value = tokenValue
    }

    function setUser(userValue) {
       localStorage.setItem("user", JSON.stringify(userValue))
       user.value = userValue
    }

    async function checkToken() {
        try {
            console.log('Verificando token...');
            const tokenAuth = 'Bearer ' + token.value;
            const data = await http.get('/customer/profile', {
                headers: {
                    'Authorization': tokenAuth
                }
            });
    
            setUser(data.data);
    
            console.log('Resposta do servidor:', data.data);
            return data;
        } catch (error) {
            console.error('Erro ao verificar o token:', error);
            throw error;
        }
    }    
    
    return {
        token, user, setUser, setToken, checkToken
    }
})
