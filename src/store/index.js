import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showMessagePostBox: false
    },
    mutations: {
        setMessagePostTag(state, payload){
            state.showMessagePostBox = payload.isOpen
        }
    }
})