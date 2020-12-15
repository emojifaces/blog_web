<template>
    <div class="card-dropdown-container">
        <el-dropdown @command="handleCommand">
            <i class="el-icon-arrow-down el-icon--right"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit" command="edit">编辑</el-dropdown-item>
                <el-dropdown-item icon="el-icon-position" command="share">分享到微博</el-dropdown-item>
                <el-dropdown-item icon="el-icon-delete" command="delete">删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        handleCommand (command) {
            if (command === 'edit') {
                this.$emit('edit')
            } else if (command === 'share') {
                this.$emit('share')
            } else if (command === 'delete') {
                this.$emit('delete')
            }
        }
    }
}
</script>
<style lang="less">
.card-dropdown-container{
    .el-icon-arrow-down{
        font-weight: bold;
        font-size: large;
    }
}
</style>