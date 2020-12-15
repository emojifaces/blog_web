<template>
    <el-dropdown class="user-head-box" @command="handleCommand">
        <img :src="loginUserHead" alt="用户头像">
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="message" :disabled="disabled">发布动态</el-dropdown-item>
            <el-dropdown-item command="article" :disabled="disabled">发布文章</el-dropdown-item>
            <el-dropdown-item command="userinfo">个人信息</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
export default {
    props: ['loginUserHead'],
    data(){
        return {
            disabled: false,
        }
    },
    methods: {
        handleCommand(command){
            if (command === 'article') {
                this.$router.push('/article/editor')
            } else if (command === 'message') {
                this.$store.commit('setMessagePostTag', {isOpen: true})
            } else if (command === 'logout') {
                localStorage.removeItem('jwt')
                this.$store.commit('setLoginState', {isLogin: false})
                location.reload()
            } else if (command === 'userinfo') {
                this.$router.push('/userInfo')
            }
        }
    },
    computed: {
        buttonDisabled(){
            return this.$store.state.buttonDisabled
        }
    },
    watch: {
        buttonDisabled(value){
            this.disabled = value
        }
    }
}
</script>
<style lang="less">
.user-head-box{
    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
}
</style>