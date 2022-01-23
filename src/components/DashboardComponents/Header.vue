<template>
  <div class="main.header">
    <div class="topnav">
    <div v-for="(user, index) in users" :key="index">
      <a :style="{'background-color': 'darkslateblue','border-color':'darkslateblue'}" v-if="currentUser === index">{{user.fullName}}</a>
    </div>
    <a @click="changeToDashboard" :style="{'border-color':dashboardButton}">Dashboard</a>
    <a @click="changeToUsers" :style="{'border-color':usersButton}">Usuarios</a>
  </div>
</div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {

computed:{
 ...mapState('dashboardModule',['dashboardButton','usersButton']),
 ...mapState('loginModule',['users','currentUser'])
},

methods: {
  ...mapMutations('dashboardModule',['changeToUsers','changeToDashboard'])
},

}
</script>

<style scoped>
.main.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
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
  border-bottom: 3px solid lightskyblue;
}

</style>