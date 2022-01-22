import * as mutations from './mutations';
import state from './state';

const loginModule = {
    namespaced: true,
    state,
    mutations,
}

export default loginModule;