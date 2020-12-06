<template>
    <div class="messagePost-conatiner">
        <el-dialog
            title="发布动态"
            :visible.sync="dialogVisible"
            width="40%"
        >
            <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 6}"
            placeholder="请输入内容"
            v-model="messageConetnt"></el-input>
            <el-upload
            class="message-imgUpload"
            :action='upload_url'
            list-type="picture-card"
            :on-remove="handleRemove"
            :auto-upload='false'
            :limit='9'
            :on-change='handleImages'
            :on-exceed="handleExceed"
            :multiple='true'
            >
                <i class="el-icon-plus"></i>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <el-button plain  @click="dialogVisible = false">取 消</el-button>
                <el-button plain  type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dialogVisible: false,
            messageConetnt: '',
            upload_url: 'http://42.51.181.42:18888/api/upload_img',
            imgList: []
        }
    },
    methods: {
        // 添加图片钩子函数
        handleImages (file, fileList) {
            this.imgList = fileList
        },
        // 删除图片钩子函数
        handleRemove (file, fileList) {
            this.imgList = fileList
        },
        // 警告钩子函数
        handleExceed () {
            this.$message({
                showClose: true,
                message: '最多只能上传九张图片',
                type: 'error'
            })
        },
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
<style lang="less">
.message-imgUpload{
    margin-top: 2rem;
    .el-upload--picture-card{
        width: 100px;
        height: 100px;
        line-height: 105px;
    }
    .el-upload-list--picture-card{
        .el-upload-list__item{
            width: 100px;
            height: 100px;
        }
    }
}
</style>