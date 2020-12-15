import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showMessagePostBox: false,
        loginState: !!localStorage.getItem('jwt'),
        newMessage: {},
        buttonDisabled: false, // 是否禁用发布动态\发布文章按钮
    },
    mutations: {
        setMessagePostTag(state, payload){
            state.showMessagePostBox = payload.isOpen
        },
        setLoginState(state, payload){
            state.loginState = payload.isLogin
        },
        addMessage(state, payload){
            state.newMessage = payload.data
        },
        // 设置是否禁用发布动态、发布文章按钮
        setPostDisabled(state, payload){
            state.buttonDisabled = payload.disabled
        },
    }
})