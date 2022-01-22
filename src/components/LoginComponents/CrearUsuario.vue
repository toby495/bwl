<template>
  <div class="form">
       <h2>Crear Cuenta</h2>
    <div class="container">
      <label for="uname"><b>Correo Electrónico</b></label>
      <input v-model="inputEmail" type="text" placeholder="JMedina@bwl.com.mx" name="uname"/>

      <label for="psw"><b>Contraseña</b></label>
      <input :style="{'border-color':passwordInput}" v-model="inputPassword"  type="password" placeholder="******************" name="psw"  />
    
      <label for="psw"><b>Confirmar Contraseña</b></label>
      <input :style="{'border-color':confirmPasswordInput}" v-model="inputConfirmPassword" type="password" placeholder="******************" name="psw" />

      <label for="psw"><b>Nombre Completo</b></label>
      <input v-model="inputFullName" type="text" placeholder="José Antonio Medina Pérez" name="psw" required />

      <button :disabled="buttonState" @click="createUser" type="submit">Registrarme</button>
    </div>

    <div class="container" style="background-color: #f1f1f1">
         <button  type="button" @click="changeToLogin" class="cancelbtn">Cerrar</button>
    </div>

  </div>
</template>


<script>
import {mapMutations, mapState} from 'vuex';
export default {
   updated(){
      this.inputEmail && this.inputPassword && this.inputConfirmPassword && this.inputFullName
      ? this.activeButton()
      : this.disabledButton();
       this.inputPassword != this.inputConfirmPassword
       ?  this.passwordWarning()
       :  this.samePassword();
       this.inputConfirmPassword != this.inputPassword
       ? this.confirmPasswordWaring()
       : this.sameConfirmPassword();
   },

  computed:{
      ...mapState('loginModule',['buttonState','passwordInput','confirmPasswordInput',])
  },

  methods: {
    ...mapMutations("loginModule", ["changeToLogin","createUser","activeButton","disabledButton","passwordWarning","samePassword","confirmPasswordWaring","sameConfirmPassword"]),
    createUser(){
        this.$store.commit("loginModule/createUser",{
            email: this.inputEmail,
            password: this.inputConfirmPassword,
            fullName: this.inputFullName 
        });
    }
  },

  data() {
    return {
     inputEmail:"",
     inputPassword:"",
     inputConfirmPassword:"",
     inputFullName:""
    }
  },
};
</script>

<style>
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}

form {
  border: 3px solid #f1f1f1;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border-bottom: 1px solid lightskyblue;
  box-sizing: border-box;
  outline: none;
}

button {
  background-color: lightskyblue;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}


@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
</style>