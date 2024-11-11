<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'


export default {
    name: 'Authorization',
    
    setup() {
        const _LOGIN = ref(""),
              _PASSWORD = ref("")
    return {
        _LOGIN,
        _PASSWORD,
        v$: useVuelidate()
    }
    },
    methods: {
         submitHendler () {
            
        },
        
    },
    validations() {
    return {
      _LOGIN: { required, email },
      _PASSWORD: { required,  minLength: minLength(6) },
    };
  },
}

      
// function submitHendler () {
//     console.log(_LOGIN.value)
//     console.log($v)
// }

//validation

                        // :class="{invalid: (v$._LOGIN.$dirty) && (!v$._LOGIN.required) || (v$._LOGIN.$dirty) && (!v$._LOGIN.email)}"
</script>
<template>
    <div class="background_image ">
        <div class="w3-display-middle w3-large ">
            <form class="w3-round w3-padding" @submit.prevent="submitHendler()">
                <h3 class="w3-center w3-padding">АВТОРИЗАЦИЯ</h3>
                <label class="w3-padding">Логин</label>
                <input class="icon-user w3-input w3-padding w3-border w3-round-xlarge"
                        type="email" 
                        v-model="_LOGIN"
                        :class="{ error: v$._LOGIN.$errors.length }">
                        <div v-for="error of v$._LOGIN.$silentErrors" :key="error.$message">
                            <div>{{ error.$message }}</div>
                        </div>
                <label class="w3-padding">Пароль</label>
                <input class="w3-input w3-padding w3-border w3-round-xlarge" 
                        type="password" 
                        v-model="_PASSWORD"
                        required>
                        <div v-for="error of v$._PASSWORD.$silentErrors" :key="error.$message">
                            <div>{{ error.$message }}</div>
                        </div>
                <button class="w3-btn w3-light-grey w3-border w3-margin-40 w3-border w3-round-xlarge"
                        @click="submitHendler()"
                        :disabled=v$.$invalid
                        >Войти</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
form {
    background-color: #9d9c9c3b;
    backdrop-filter: blur(5px);
    color: white;
}
form > button {
    display: block;
    margin: 16px auto 16px auto;
}
form > h3 {
    font-weight: bold;
}
form > input {
    background: none;
}
.background_image {
    background-image: url("/img/background_auth.jpg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute; 
    width: 100%;
    height: 100%;
}
.invalid {
    border-color: red !important;
}
</style>