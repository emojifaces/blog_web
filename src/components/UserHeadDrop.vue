<template>
    <el-dropdown class="user-head-box">
        <img src="../assets/img/myhead.jpg" alt="用户头像">
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>发布动态</el-dropdown-item>
            <el-dropdown-item>发布文章</el-dropdown-item>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<style lang="less">
.user-head-box{
    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
}
</style>