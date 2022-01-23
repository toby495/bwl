<template>
  <Header/>
  <div>
    <div v-if="dashboardState">
      <DashboardContent />
    </div>
    <div v-else>
      <UserTable/>
    </div>
  </div>
</template>

<script>

import Header from '../components/DashboardComponents/Header';
import DashboardContent from '../components/DashboardComponents/DashboarContent'
import UserTable from '../components/DashboardComponents/UserTable.vue'
import {mapState} from 'vuex'

export default {

components:{
  Header,
  DashboardContent,
  UserTable
},

computed:{
  ...mapState('dashboardModule',['dashboardState'])
}



}
</script>

<style>

</style>