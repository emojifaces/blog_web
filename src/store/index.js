import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showMessagePostBox: false,
        loginState: !!localStorage.getItem('jwt')
    },
    mutations: {
        setMessagePostTag(state, payload){
            state.showMessagePostBox = payload.isOpen
        },
        setLoginState(state, payload){
            state.loginState = payload.isLogin
        }
    }
})