import Vue from 'vue'
import Vuex from 'vuex'

import comingModule from './coming/index'
Vue.use(Vuex)


const store = new Vuex.Store({
    modules:{
        comingStore:comingModule
    }
})


export default store