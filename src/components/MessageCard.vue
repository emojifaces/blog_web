<template>
    <div class="message-card-container">
        <div class="card-header">
            <div class="user-header">
                <img :src="messageinfo.user.user_head" >
            </div>
            <div class="user-name">
                <span>{{ messageinfo.user.nickname }}</span>
            </div>
        </div>
        <div class="card-content">{{ messageinfo.content }}</div>
    </div>
</template>
<script>
export default {
    props: ['messageinfo'],
    data(){
        return {

        }
    },
    methods: {
        
    }
} 
</script>
<style lang="less" scoped>
.message-card-container{
    background-color:white;
    padding: 10px 0;
    .card-header{
        display:flex;
        .user-header{
            img{
                width:40px;
                border-radius: 50%;
            }
        }
        .user-name{
            padding:5px 10px;
            font-size:Medium;
        }
    }
    .card-content{
        padding-left: 50px;
        font-size: small;
    }
}
</style>
