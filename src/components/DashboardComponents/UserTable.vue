<template>
<br>
<table id="users">
  <tr>
    <th>Nombre</th>
    <th>Correo Electrónico</th>
    <th>Fecha de registro</th>
    <th>Último login</th>
  </tr>
  <tr v-for="(user, index) in users" :key="index">
    <td>{{user.fullName}}</td>
    <td>{{user.email}}</td>
    <td>{{user.createdDate}}</td>
    <td>{{user.logTime}}</td>
  </tr>
</table>
</template>

<script>

import {mapState} from 'vuex'

export default {

computed:{
  ...mapState('loginModule',['users'])
}
}
</script>

<style scoped>
  #users {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#users td, #users th {
  border: 1px solid #ddd;
  padding: 8px;
}

#users tr:nth-child(even){background-color: #f2f2f2;}

#users tr:hover {background-color: #ddd;}

#users th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color:darkslateblue;
  color: white;
}
</style>