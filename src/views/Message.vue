<template>
  <div class="message-container">
      <el-timeline>
          <el-timeline-item 
          :timestamp="message.create_time" 
          placement="top"
          v-for="message in messageList"
          :key="message.id"
          >
            <el-card>
                <MessageCard :messageinfo="message"></MessageCard>
            </el-card>
          </el-timeline-item>
      </el-timeline>
      
  </div>
</template>
<script>
import MessageCard from '../components/MessageCard.vue'
    export default{
        data(){
            return {
              messageList: []
            }
        },
        components:{
            MessageCard
        },
        mounted(){
          const loading = this.$loading({
                lock: true,
                text: '动态加载中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
          this.$axios.get('/message')
          .then(res => this.messageList = res.data)
          .finally(() => {
            loading.close()
          })
        }
    }
</script>
<style lang="less" scoped>
@import '../assets/css/message.less';

</style>