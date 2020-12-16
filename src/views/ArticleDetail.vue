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
                <el-divider direction="vertical"></el-divider>
                <span>最后编辑：{{ updaeTime }}</span>
            </div>
            <el-divider><span style="font-size:small;color:#C0C4CC">正文</span></el-divider>
            <div v-html="content"></div>
            <el-divider><span style="font-size:small;color:#C0C4CC">结束</span></el-divider>
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
            updaeTime: '',
            author: {}
        }
    },
    mounted(){
        const loading = this.$loading({
                lock: true,
                text: '文章加载中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
        this.$axios.get('/article/'+this.$route.params.articleId)
        .then(res => {
            if (res.status === 1) {
                this.title = res.data.title
                this.content = res.data.content
                this.createTime = res.data.create_time
                this.updaeTime = res.data.update_time
                this.img = res.data.img
                this.author = res.data.user
            }
        }).finally(() => {
            loading.close()
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
                color: #909399;
            }
        }
    }
}
</style>