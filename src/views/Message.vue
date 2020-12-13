<template>
  <div class="message-container">
      <el-timeline
      style="height:auto;">
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
              messageList: [],
              isLoadMoreMessage: false
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
              }
            })
            this.$message.success('删除成功')
          },
          
          // 加载下一页动态
          loadMoreMessage(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            let clientHeight = document.documentElement.clientHeight
            let scrollHeight = document.documentElement.scrollHeight
            if (scrollTop + clientHeight >= scrollHeight - 10 && this.isLoadMoreMessage == false) {
              this.isLoadMoreMessage = true
              const url = '/message/?offset=' + this.messageList.length
              this.$axios.get(url).then(res => {
                if (res.status === 1) {
                  this.messageList = this.messageList.concat(res.data)
                  this.isLoadMoreMessage = false
                } else {
                  this.$message.warning('我是有底线的')
                }
              })
            }
          },
        },
        created(){
          window.addEventListener('scroll', this.loadMoreMessage)
        },
        mounted(){
          const loading = this.$loading({
                lock: true,
                text: '动态加载中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
          this.$axios.get('/message/')
          .then(res => this.messageList = res.data)
          .finally(() => {
            loading.close()
          })
        },
        destroyed(){
          window.removeEventListener('scroll', this.loadMoreMessage)
        },
        computed: {
          newMessage(){
            return this.$store.state.newMessage
          }
        },
        watch: {
          newMessage(data){
            // 监听发布动态，动态加载数据
            this.messageList.unshift(data)
          }
        }
    }
</script>
<style lang="less" scoped>
@import '../assets/css/message.less';

</style>