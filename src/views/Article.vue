<template>
    <div class="article-container">
        <ArticleCard 
        v-for="article in articleList"
        :key="article.id"
        :articleObj="article"
        @get-article-id="toArticleDetail"
        @delete="handleDelete"
    ></ArticleCard>
    <el-pagination
    :pager-count="11"
    layout="prev, pager, next, total"
    :total="count"
    background
    :page-size="5"
    :hide-on-single-page="true"
    :current-page="currentPage"
    @next-click="handlePageChange"
    @prev-click="handlePageChange"
    @current-change="handlePageChange">
    </el-pagination>
    </div>
</template>
<script>
import ArticleCard from '../components/ArticleCard.vue'
export default{
    data(){
        return {
            articleList: [],
            isLoadMoreArticle: false,
            count: null,
            currentPage: 1
        }
    },
    components:{
        ArticleCard
    },
    mounted(){
        const page = this.$route.query.page
        if (page) {
            this.currentPage = parseInt(page)
            this.loadData(page)
        } else {
            this.loadData(1)
        }      
    },
    methods: {
        loadData(page){
            const loading = this.$loading({
                lock: true,
                text: '文章加载中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            const url = '/article/?page=' + page
            this.$axios.get(url)
            .then(res => {
                if (res.status === 1) {
                    this.articleList = res.data
                    this.count = res.count
                }
            })
            .finally(() => {
                loading.close()
            })
        },
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
        handlePageChange(value){
            const url = '/article/?page=' + value
            this.$router.push(url)
        }
    },
    beforeRouteUpdate (to, from , next) {
        if (to.query.page) {
            next()
            location.reload()
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
<style lang="less">
.article-container .el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #606266;
}
.article-container .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #DCDFE6;
    background-color: #C0C4CC;
}
</style>