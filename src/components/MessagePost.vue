<template>
    <div class="messagePost-conatiner">
        <el-dialog
            title="发布动态"
            :visible.sync="dialogVisible"
            width="25%"
        >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dialogVisible: false
        }
    },
    computed: {
        openMessagePostBox(){
            return this.$store.state.showMessagePostBox
        }
    },
    watch: {
        openMessagePostBox(){
            this.dialogVisible = true
            this.$store.commit('setMessagePostTag', {isOpen: false})
        }
    }
}
</script>