<template>
    <div class="article-container">
        <ArticleCard 
        v-for="article in articleList"
        :key="article.id"
        :articleObj="article"
        @get-article-id="toArticleDetail"
        @delete="handleDelete"
    ></ArticleCard>
    </div>
</template>
<script>
import ArticleCard from '../components/ArticleCard.vue'
export default{
    data(){
        return {
            articleList: [],
            isLoadMoreArticle: false
        }
    },
    components:{
        ArticleCard
    },
    created(){
        window.addEventListener('scroll', this.loadMoreArticle)
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
            if (res.status === 1) {
                this.articleList = res.data
            }
        })
        .finally(() => {
            loading.close()
        })
    },
    destroyed(){
        window.removeEventListener('scroll', this.loadMoreArticle)
    },
    methods: {
        toArticleDetail(articleId){
            this.$router.push('/article/'+articleId)
        },
        handleDelete(id){
            this.articleList.forEach(item => {
                if (item.id === id) {
                    this.articleList.splice(item, 1)
                }
            })
            this.$message.success('删除成功')
        },
        loadMoreArticle(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            let clientHeight = document.documentElement.clientHeight
            let scrollHeight = document.documentElement.scrollHeight
            if (scrollTop + clientHeight >= scrollHeight - 10 && this.isLoadMoreArticle == false) {
              this.isLoadMoreArticle = true
              const url = '/article/?offset=' + this.articleList.length
              this.$axios.get(url).then(res => {
                if (res.status === 1) {
                  this.articleList = this.articleList.concat(res.data)
                  this.isLoadMoreArticle = false
                } else {
                  this.$message.warning('我是有底线的')
                }
              })
            }
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