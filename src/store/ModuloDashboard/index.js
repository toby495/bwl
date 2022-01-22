import * as mutations from './mutations';
import state from './state';

const dashboardModule = {
    namespaced: true,
    state,
    mutations,
}

export default dashboardModule;