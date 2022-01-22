<template>
  <div class="topnav">
    <div  :style="{'background-color':dashboardButtom}">
      <a href="#news">Dashboard</a>
    </div>
    <div :style="{'background-color':userButton}">
      <a href="#contact">Usuarios</a>
    </div>
</div>
</template>

<script>

import {mapState} from 'vuex';

export default {

computed:{
 ...mapState('dashboardModule',['dashboardButton','usersButton'])
}

}
</script>

<style scoped>

.topnav {
  background-color:lightskyblue;
  overflow: hidden;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

</style>