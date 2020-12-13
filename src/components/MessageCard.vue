<template>
    <div class="message-card-container">
        <div class="card-header">
            <div class="user-header">
                <img :src="messageinfo.user.user_head" >
            </div>
            <div class="user-name">
                <span>{{ messageinfo.user.nickname }}</span>
            </div>
            <card-drop-down class="cardDropDown" v-if="messageinfo.is_mine" @delete="handleDelete" @edit="handleEdit" @share="handleShare"></card-drop-down>
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
import CardDropDown from '../components/CardDropDown.vue'
export default {
    props: ['messageinfo'],
    components: {
        CardDropDown
    },
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
            const url = '/message/' + this.messageinfo.id
            this.$axios.delete(url).then(res => {
                console.log(res)
                if (res.status === 1) {
                    this.$emit('delete', this.messageinfo.id )
                }
            })    
        },
        // 编辑动态
        handleEdit () {
            console.log('编辑动态')
        },
        // 分享到微博
        handleShare () {
            console.log('分享到微博')
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
