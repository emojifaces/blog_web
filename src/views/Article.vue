<template>
    <div class="article-container">
        <ArticleCard 
        v-for="article in articleList"
        :key="article.id"
        :articleObj="article"></ArticleCard>
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
        this.$axios.get('/article')
        .then(res => {
            console.log(res)
            if (res.status === 1) {
                this.articleList = res.data
            }
        })
    }
}
</script>
<style lang="less" scoped>
.article-container{
    background-color: unset!important;
    box-shadow:unset!important;
}
</style>