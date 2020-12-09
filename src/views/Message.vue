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
                <MessageCard :messageinfo="message" @delete="handleDelete"></MessageCard>
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
        methods: {
          // 删除动态
          handleDelete (id) {
            this.messageList.forEach((item) => {
              if (item.id === id) {
                this.messageList.splice(item, 1)
                this.$message.success('删除成功')
              }
            })
          }
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