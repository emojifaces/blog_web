<template>
  <div class="index-page-container">
    <div class="header">
      <div class="nav">
        <el-row :gutter="10">
          <el-col :span="4"><div class="home-icon"><router-link to="/">Keymaker</router-link></div></el-col>
          <el-col :span="4" :offset="4"><div class="message-icon"><router-link to="/message">动态</router-link></div></el-col>
          <el-col :span="4">
            <div class="article-icon">
              <router-link to="/article">文章</router-link>
            </div>
          </el-col>
          <el-col :span="2" :offset="6" class="user-head-drop">
            <user-head-drop v-if="islogin" :loginUserHead="userHead"></user-head-drop>
            <div class="user-operate-btn-box" v-else>
              <span @click="openLoginBox">登录</span>
              <el-divider direction="vertical"></el-divider>
              <span @click="openRegisterBox">注册</span>
            </div>
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
            <img :src="userHead" alt="">
          </div>
          <div class="profile-name">
            <span>{{nickname}}</span>
            <img v-if="sex === '男'" src="../assets/img/male.png" alt="">
            <img v-else-if="sex === '女'" src="../assets/img/female.png" alt="">
          </div>
          <div class="profile-info">
            <span>简介：{{ profile }}</span>
          </div>
          <div class="profile-divider">
            <el-divider><img src="../assets/img/profile_icon.png" alt=""></el-divider>
          </div>
          <div class="profile-weibo">
            <img src="../assets/img/weibo_icon.png" alt="">
            <span> : {{ weibo }}</span>
          </div>
          <div class="profile-email">
            <img src="../assets/img/email_icon.png" alt="">
            <span> : {{ email }}</span>
          </div>
        </div>
      </div>
      <router-view class="container-right"></router-view>

      <el-backtop><i class="el-icon-arrow-up"></i></el-backtop>

    </div>
    <login-box ref="loginbox"></login-box>
    <register-box ref="registerbox"></register-box>
    <message-post></message-post>
  </div>
</template>
<script>
import UserHeadDrop from '../components/UserHeadDrop.vue'
import LoginBox from '../components/LoginBox.vue'
import MessagePost from '../components/MessagePost.vue'
import RegisterBox from '../components/RegisterBox.vue'

export default {
  name: 'App',
  data(){
    return {
       islogin: null,
       defaultUserInfo: {
         userHead: require('../assets/img/myhead.jpg'),
         nickname: 'Keymaker',
         sex: '男',
         profile: '一个帅哥',
         weibo: 'Juice_Nasty',
         email: '1079980583@qq.com'
       },
       userHead: require('../assets/img/myhead.jpg'),
       nickname: 'Keymaker',
       sex: '男',
       profile: '一个帅哥',
       weibo: 'Juice_Nasty',
       email: '1079980583@qq.com'
    }
  },
  components: {
    UserHeadDrop,
    LoginBox,
    MessagePost,
    RegisterBox
  },
  methods:{
    openLoginBox () {
      this.$refs.loginbox.dialogFormVisible = true
    },
    openRegisterBox () {
      this.$refs.registerbox.dialogFormVisible = true
    }
  },
  mounted(){
    const isLogin = this.$store.state.loginState
    if (isLogin) {
      this.islogin = true
      // 初始化已登录用户信息
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      for (let key in userInfo) {
        if (!userInfo[key]) {
          userInfo[key] = ''
        }
      }
      this.userHead = userInfo.user_head
      this.nickname = userInfo.nickname
      this.sex = userInfo.sex
      this.profile = userInfo.profile
      this.weibo = userInfo.weibo
      this.email = userInfo.email
    } else {
      this.islogin = false
    }
  },
  computed: {
    loginState(){
      return this.$store.state.loginState
    }
  },
  watch: {
    loginState(value){
      if (value) {
        // 登录后
        this.islogin = true
      } else {
        // 退出登录
        this.islogin = false
      }
    }
  }
}
</script>

<style lang="less">
@import "../assets/css/common.less";

</style>