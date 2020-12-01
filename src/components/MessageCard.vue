<template>
    <div class="message-card-container">
        
        <div class="card-header">
            <div class="user-header">
                <img src="../assets/img/myhead.jpg" >
            </div>
            <div class="user-name">
                <span>Keymaker</span>
            </div>
        </div>
        <div class="card-content">
            Hello,World!
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
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
