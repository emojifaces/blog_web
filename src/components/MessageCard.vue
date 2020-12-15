<template>
    <div class="message-card-container">
        <div class="card-header">
            <div class="user-header">
                <img :src="messageinfo.user.user_head" >
            </div>
            <div class="user-name">
                <span>{{ messageinfo.user.nickname }}</span>
            </div>
            <div class="cardDropDown" v-if="messageinfo.is_mine" @click="handleDelete">
                <el-tooltip content="删除" placement="top">
                    <i class="el-icon-delete"></i>
                </el-tooltip>
            </div>
        </div>
        <div class="card-content">{{ messageinfo.content }}</div>
        <div class="card-img" v-if="messageinfo.images">
            <el-image
            class="message-img"
            v-for="item in messageinfo.images"
            :key="item.id"
            :src="item.img" 
            :preview-src-list="previewList">
            </el-image>
        </div>
    </div>
</template>
<script>
export default {
    props: ['messageinfo'],
    data(){
        return {
            imgVisible: false,
            imgUrl: '',
            previewList: []
        }
    },
    methods: {
        // 查看图片
        handlePicturePreview (imgUrl) {
            this.imgUrl = imgUrl
            this.imgVisible = true
        },
        // 删除动态
        handleDelete () {
            const url = '/message/' + this.messageinfo.id + '/delete/'
            this.$axios.delete(url).then(res => {
                if (res.status === 1) {
                    this.$emit('delete', this.messageinfo.id )
                }
            })    
        }
    },
    mounted(){
        if (this.messageinfo.images){
            this.previewList = this.messageinfo.images.map((item) => item.img)
        }
    }
} 
</script>
<style lang="less" scoped>
.message-card-container{
    background-color:white;
    padding: 10px 0;
    .card-header{
        display:flex;
        position: relative;
        .user-header{
            img{
                width:40px;
                border-radius: 50%;
            }
        }
        .user-name{
            padding:5px 10px;
            font-size:Medium;
        }
        .cardDropDown{
            position: absolute;
            right: 0;
        }
    }
    .card-content{
        padding-left: 50px;
        font-size: small;
        color: #606266;
    }
    .card-img{
        padding-left: 50px;
        width: 50%;
        .message-img{
            margin: 1rem 1rem 1rem 0;
            width: 100px;
            height: 100px;
        }
    }
}
</style>
