<template>

  <h2>Bienvenido</h2>

  <div class="form">
    <div class="container">
      <label for="uname"><b>Correo Electrónico</b></label>
      <input v-model="inputEmail" type="text" placeholder="JMedina@bwl.com.mx" name="uname" required />

      <label for="psw"><b>Contraseña</b></label>
      <input v-model="inputPassword" type="password" placeholder="*******************" name="psw" required />

      <button type="submit" @click="login()">Iniciar Sesión</button>
    </div>

    <div class="container" style="background-color: #f1f1f1">
      <span class="psw"> ¿No tienes cuenta? <a @click="changeToCreateUser" href="#">Registrarse</a></span>
    </div><br>
    <v-alert v-if="errorLogAlert" border="start" color="red" class="ma-2">
      Usuario o contraseña equivocado
    </v-alert>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("loginModule", ["users","errorLogAlert"]),
  },

  methods: {
    ...mapMutations("loginModule", ["changeToCreateUser","activatedErrorAlert"]),
    login() {
      let date = new Date();
      let user = {
        ...this.users.find((element) => element.email === this.inputEmail),
      };
      if ( user.password === this.inputPassword && user.email === this.inputEmail) {
        this.$router.push({ path: "/Dashboard" });
        this.$store.commit("loginModule/getCurrentUser", {
          currentUserIndex: this.users.findIndex( x => x.email === this.inputEmail),
          logTime: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
          lastLoginDate: `${date.getDate()}/${ date.getMonth() + 1}/${date.getFullYear()}`,
        });
        this.activatedErrorAlert(false);
      } else {
        this.activatedErrorAlert(true);
      }
    },
  },

  data() {
    return {
      inputEmail: "",
      inputPassword: "",
    };
  },
};
</script>

<style>
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