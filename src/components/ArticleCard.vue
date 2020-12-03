<template>
  <div class="article-card-container" @click="toArticleDetail">
    <div class="article-card-img">
      <img :src="articleObj.img" alt="" />
    </div>
    <div class="article-card-main">
      <div class="article-card-body">
        <div class="article-title">{{ articleObj.title }}</div>
        <div class="article-content">{{ articleObj.content }}</div>
      </div>
      <div class="article-card-footer">{{ articleObj.create_time }}</div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['articleObj'],
    data(){
      return {
        articleId: this.articleObj.id
      }
    },
    methods: {
      toArticleDetail(){
          this.$emit('get-article-id', this.articleId)
      }
    }
};
</script>
<style lang="less" scoped>
.article-card-container {
  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  height: 150px;
  .article-card-img {
    width: 20%;
    padding: 5px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .article-card-main {
    width: 80%;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .article-card-body {
      .article-title {
        font-size: 20px;
      }
      .article-content {
        margin: 10px 0;
        font-size: 13px;
      }
    }
  }
}
</style>