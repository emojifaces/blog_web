<template>
    <div class="message-card-container">
        <div class="card-header">
            <div class="user-header">
                <img :src="messageinfo.user.user_head" >
            </div>
            <div class="user-name">
                <span>{{ messageinfo.user.nickname }}</span>
            </div>
        </div>
        <div class="card-content">{{ messageinfo.content }}</div>
        <div class="card-img" v-if="messageinfo.images">
            <el-image
            v-for="item in messageinfo.images"
            :key="item.id"
            style="width: 100px; height: 100px"
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
        handlePicturePreview (imgUrl) {
            this.imgUrl = imgUrl
            this.imgVisible = true
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
    }
    .card-content{
        padding-left: 50px;
        font-size: small;
    }
}
</style>
