<template>
  <div class="index-page-container">
    <div class="header">
      <div class="nav">
        <el-row :gutter="10">
          <el-col :span="4"><div class="home-icon"><router-link to="/">Keymaker</router-link></div></el-col>
          <el-col :span="4" :offset="4"><div class="message-icon"><router-link to="/message">动态</router-link></div></el-col>
          <el-col :span="4">
            <div class="article-icon" @mouseover="articleSort=true" @mouseleave="articleSort=false">
              <router-link to="/article">文章</router-link>
            </div>
          </el-col>
          <el-col :span="2" :offset="6" class="user-head-drop">
            <user-head-drop></user-head-drop>
          </el-col>
        </el-row>
      </div>
      
    </div>
    <div class="container">
      <div class="container-left">
        <div class="profile">
          <div class="profile-background">
            <img src="../assets/img/person_background.jpg" alt="">
          </div>
          <div class="profile-head">
            <img src="../assets/img/myhead.jpg" alt="">
          </div>
          <div class="profile-name">
            <span>Keymaker</span>
            <img src="../assets/img/male.png" alt="">
          </div>
          <div class="profile-divider">
            <el-divider><img src="../assets/img/profile_icon.png" alt=""></el-divider>
          </div>
          <div class="profile-weibo">
            <img src="../assets/img/weibo_icon.png" alt="">
            <span> : Juice_Nasty</span>
          </div>
          <div class="profile-email">
            <img src="../assets/img/email_icon.png" alt="">
            <span> : 1079980583@qq.com</span>
          </div>
        </div>
      </div>
      <router-view class="container-right"></router-view>

      <el-backtop><i class="el-icon-arrow-up"></i></el-backtop>

    </div>
  </div>
</template>
<script>
import UserHeadDrop from '../components/UserHeadDrop.vue'
export default {
  name: 'App',
  data(){
    return {
       
    }
  },
  components: {
    UserHeadDrop
  },
  methods:{
    
  }
}
</script>

<style lang="less">
@import "../assets/css/common.less";

</style>