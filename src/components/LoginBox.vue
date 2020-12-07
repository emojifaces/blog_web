<template>
    <div class="login-page-container">
        <el-dialog 
        title="登录" 
        :visible.sync="dialogFormVisible"
        width="20%">
            <el-form :model="loginForm" class="login-form">
                <el-form-item label="用户名">
                    <el-input v-model="loginForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button plain @click="dialogFormVisible = false" size="small">取 消</el-button>
                <el-button plain @click="userLogin" size="small">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dialogFormVisible: false,
            loginForm: {}
        }
    },
    methods: {
        userLogin(){
            const loading = this.$loading({
                lock: true,
                text: '登陆中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            const loginForm = this.loginForm
            this.$axios.post('/token/',loginForm)
            .then(res => {
                if (res.access) {
                    const jwt = res.access
                    localStorage.setItem('jwt', jwt)
                    this.$store.commit('setLoginState', {isLogin: true})
                    this.dialogFormVisible = false
                }
            }).finally(() => {
                loading.close()
            })
            
        }
    }
}
</script>
<style lang="less" scoped>
.login-page-container{
    .login-form{
        padding: 0 0.5rem;
    }
}
</style>