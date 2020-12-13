<template>
    <div class="user-info-container">
        <el-collapse v-model="activeNames" accordion class="user-info-panel">
            <el-collapse-item class="user-info-item" name="1">
                <template slot="title">
                    <div class="user-info-item-title">
                        <span>个人资料</span>
                        <img src="../assets/img/userInfo_icon.png" alt="">
                    </div>
                </template>
                <el-form label-width="10%" :model="userInfo">
                    <el-form-item label="昵称">
                        <el-input v-model="userInfo.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="简介">
                        <el-input v-model="userInfo.profile"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="userInfo.sex">
                            <el-radio label="男">男</el-radio>
                            <el-radio label="女">女</el-radio>
                            <el-radio label="保密">保密</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="微博">
                        <el-input v-model="userInfo.weibo"></el-input>
                    </el-form-item>
                    <el-form-item label="Email">
                        <el-input v-model="userInfo.email"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="text" @click="updateUserInfo">保存</el-button>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item class="user-info-item" name="2">
                <template slot="title">
                    <div class="user-info-item-title">
                        <span>修改密码</span>
                        <img src="../assets/img/password_icon.png" alt="">
                    </div>
                </template>
                <el-form label-width="10%" status-icon>
                    <el-form-item label="新密码">
                        <el-input v-model="password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input v-model="checkpassword" type="password"></el-input>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default {
    data(){
        return {
            activeNames: ['1'],
            userInfo: {},
            password: '',
            checkpassword: '',
        }
    },
    methods: {
        updateUserInfo(){
            // 更新用户信息
            const userInfo = this.userInfo
            const fd = new FormData()
            fd.set('nickname', userInfo.nickname)
            fd.set('profile', userInfo.profile)
            fd.set('weibo', userInfo.weibo)
            fd.set('email', userInfo.email)
            if (userInfo.sex === '男') {
                fd.set('sex', 1)
            } else if (userInfo.sex === '女') {
                fd.set('sex', 0)
            } else {
                fd.set('sex', 2)
            }
            this.$axios.post('/user/update_user_info/', fd)
            .then(res => {
                console.log('save success',res)
                if (res.status === 1) {
                    this.$message.success('保存成功')
                    const userInfo = res.data
                    let sex = userInfo.sex
                    if (sex === 0) {
                        userInfo.sex = '女'
                    } else if (sex === 1) {
                        userInfo.sex = '男'
                    } else {
                        userInfo.sex = '保密'
                    }
                    localStorage.setItem('userInfo', JSON.stringify(userInfo))
                    location.reload()
                } else {
                    this.$message.error('保存失败')
                }
            })
        }
    },
    mounted(){
        // 初始化用户信息表单数据
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    }
}
</script>
<style lang="less" scoped>
.user-info-container{
    .user-info-panel{
        padding: 2rem;
    }
    .user-info-item {
        padding: 0 1rem;
        .user-info-item-title{
            img{
            width: 20px;
            vertical-align: text-bottom;
            }
            span{
                font-size: large;
                font-weight: bold;
                margin-right: 0.5rem;
            }
        }
    }
}
</style>
<style lang="less">
.user-info-container{
    .el-input__inner{
        width: 30%;
    }
}
</style>