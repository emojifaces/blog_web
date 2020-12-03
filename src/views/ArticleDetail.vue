<template>
    <div class="articleDetail-page-container">
        <div class="article-detail-header">
            <el-page-header @back="goBack"></el-page-header>
        </div>
        
        <img :src="img" alt="">
        <div class="article-detail-conatiner">
            <h1>{{ title }}</h1>
            <div class="article-author-info">
                <img :src="author.user_head" alt="">
                <span>{{ author.nickname }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>{{ createTime }}</span>
            </div>
            <el-divider><span style="font-size:small">正文</span></el-divider>
            <div v-html="content"></div>
            <el-divider><span style="font-size:small">结束</span></el-divider>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            img: '',
            title: '',
            content: '',
            createTime: '',
            author: {}
        }
    },
    mounted(){
        this.$axios.get('/article/'+this.$route.params.articleId)
        .then(res => {
            console.log(res)
            if (res.status === 1) {
                this.title = res.data.title
                this.content = res.data.content
                this.createTime = res.data.create_time
                this.img = res.data.img
                this.author = res.data.user
            }
        })
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
.articleDetail-page-container{
    .article-detail-header{
        position: absolute;
        background-color: darkgrey;
    }
    img{
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    .article-detail-conatiner{
        padding: 2rem;
        .article-author-info{
            img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                vertical-align: middle;
            }
            span{
                font-size: small;
                margin: 0 1rem;
            }
        }
    }
}
</style>