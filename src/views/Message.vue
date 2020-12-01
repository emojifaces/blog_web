<template>
  <div class="message-container">
      <el-timeline>
          <el-timeline-item timestamp="2020/10/24" placement="top">
            <el-card>
                <MessageCard></MessageCard>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/10/24" placement="top">
            <el-card>
                <MessageCard></MessageCard>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/10/24" placement="top">
            <el-card>
                <MessageCard></MessageCard>
            </el-card>
          </el-timeline-item><el-timeline-item timestamp="2020/10/24" placement="top">
            <el-card>
                <MessageCard></MessageCard>
            </el-card>
          </el-timeline-item><el-timeline-item timestamp="2020/10/24" placement="top">
            <el-card>
                <MessageCard></MessageCard>
            </el-card>
          </el-timeline-item><el-timeline-item timestamp="2020/10/24" placement="top">
            <el-card>
                <MessageCard></MessageCard>
            </el-card>
          </el-timeline-item><el-timeline-item timestamp="2020/10/24" placement="top">
            <el-card>
                <MessageCard></MessageCard>
            </el-card>
          </el-timeline-item><el-timeline-item timestamp="2020/10/24" placement="top">
            <el-card>
                <MessageCard></MessageCard>
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

            }
        },
        components:{
            MessageCard
        }
    }
</script>
<style lang="less" scoped>
@import '../assets/css/message.less';

</style>