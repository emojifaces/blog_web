<template>
    <div class="articleCoverUpload-container">
        <div class="pic">
            <img :src="imgUrl" alt="文章封面">
        </div>
        <div class="pic-cover">
            <div class="el-icon-picture-outline"></div>
            设置文章封面
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgUrl: require('../assets/img/default_img.jpg')
        }
    }
}
</script>
<style lang="less" scoped>
.articleCoverUpload-container{
    width: 300px;
    height: 170px;
    position: relative;
    .pic{
        img{
            width: 300px;
            height: 170px;
            object-fit: cover;
        }
    }
    .pic-cover{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: darkgrey;
        top: 0;
        opacity: 0.5;
    }
}
</style>