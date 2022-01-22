import {createStore} from 'vuex'
import loginModule from './ModuloLogin/'
import dashboardModule from './ModuloDashboard'

export default  createStore({
    modules:{
      loginModule,
      dashboardModule
    }
})