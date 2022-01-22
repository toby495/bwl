<template>
  <div class="main-container">
    <div v-if="loginState">
      <IniciarSesion />
    </div>
    <div  class="main-container" v-else>
      <CrearUsuario />
    </div>
  </div>
</template>

<script>
import IniciarSesion from "../components/LoginComponents/IniciarSesion.vue";
import CrearUsuario from "../components/LoginComponents/CrearUsuario.vue";
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState('loginModule',["loginState"])
  }
  ,
  components: {
    IniciarSesion,
    CrearUsuario,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
*{
  font-family: 'Montserrat', sans-serif;
}
  .main-container{
    display:flex;
    justify-content:center;
    align-items:center;
    margin:auto;
    height:100%;
  }
</style>