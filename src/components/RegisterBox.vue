<template>
    <div class="register-page-container">
        <el-dialog 
        title="注册" 
        :visible.sync="dialogFormVisible"
        width="20%">
            <el-form :model="registerForm" class="register-form" :rules="rules" ref="registerForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="registerForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邀请码" prop="code">
                    <el-input v-model="registerForm.code" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button plain @click="dialogFormVisible = false" size="small">取 消</el-button>
                <el-button plain @click="userRegister" size="small">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dialogFormVisible: false,
            registerForm: {},
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请输入邀请码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        userRegister(){
            this.$refs.registerForm.validate((valid) => {
                if (valid) {
                    const registerForm = this.registerForm
                    this.$axios.post('/user/register/', registerForm)
                    .then(res => {
                        if (res.status === 1) {
                            this.$message.success('注册成功！')
                        } else {
                            this.$message.error('注册失败！')
                        }
                    })
                } else {
                    this.$message.error('输入有误！')
                    return false
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.register-page-container{
    .register-form{
        padding: 0 0.5rem;
    }
}
</style>