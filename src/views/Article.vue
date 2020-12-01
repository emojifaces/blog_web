<template>
    <div class="article-container">
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
    </div>
</template>
<script>
import ArticleCard from '../components/ArticleCard.vue'
export default{
    data(){
        return {

        }
    },
    components:{
        ArticleCard
    }
}
</script>
<style lang="less" scoped>
.article-container{
    background-color: unset!important;
    box-shadow:unset!important;
}
</style>