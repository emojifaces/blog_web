<template>
    <div class="article-container">
        <ArticleCard 
        v-for="article in articleList"
        :key="article.id"
        :articleObj="article"
        @get-article-id="toArticleDetail"
    ></ArticleCard>
    </div>
</template>
<script>
import ArticleCard from '../components/ArticleCard.vue'
export default{
    data(){
        return {
            articleList: []
        }
    },
    components:{
        ArticleCard
    },
    mounted(){
        const loading = this.$loading({
                lock: true,
                text: '文章加载中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
        this.$axios.get('/article')
        .then(res => {
            console.log(res)
            if (res.status === 1) {
                this.articleList = res.data
            }
        })
        .finally(() => {
            loading.close()
        })
    },
    methods: {
        toArticleDetail(articleId){
            this.$router.push('/article/'+articleId)
        }
    }
}
</script>
<style lang="less" scoped>
.article-container{
    background-color: unset!important;
    box-shadow:unset!important;
}
</style>