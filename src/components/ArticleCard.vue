<template>
  <div class="article-card-container">
    <div class="article-card-img">
      <el-image :src="articleObj.img" fit="cover" style="width: 100%; height: 100%"></el-image>
    </div>
    <div class="article-card-main" @click="toArticleDetail">
      <div class="article-card-body">
        <div class="article-title">{{ articleObj.title }}</div>
        <div class="article-content">{{ articleObj.content }}</div>
      </div>
      <div class="article-card-footer">{{ articleObj.create_time }}</div>
    </div>
    <card-drop-down class="cardDropDown" v-if="articleObj.is_mine" @delete="handleDelete" @edit="handleEdit" @share="handleShare"></card-drop-down>
  </div>
</template>
<script>
import CardDropDown from '../components/CardDropDown.vue'
export default {
    props: ['articleObj'],
    components: {
      CardDropDown,
    },
    data(){
      return {
        articleId: this.articleObj.id
      }
    },
    methods: {
      toArticleDetail(){
          this.$emit('get-article-id', this.articleId)
      },
      handleDelete(){
        const url = '/article/' + this.articleObj.id + '/delete/'
        this.$axios.delete(url).then(res => {
          if (res.status === 1) {
            this.$emit('delete', this.articleId)
          }
        })
      },
      handleEdit(){
        const url = '/article/edit/' + this.articleObj.id
        this.$router.push(url)
      },
      handleShare(){
        console.log('分享')
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
    padding: 0.6rem;
  }
  .article-card-main {
    width: 75%;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .article-card-body {
      cursor: pointer;
      .article-title {
        font-size: 20px;
      }
      .article-content {
        margin: 10px 0;
        font-size: 13px;
        color: #606266;
      }
    }
  }
  .cardDropDown{
    padding: 1rem;
  }
}
.article-card-container:hover{
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>