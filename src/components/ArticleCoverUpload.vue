<template>
    <div class="articleCoverUpload-container">
        <div class="pic">
            <img :src="imgUrl" alt="文章封面">
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
    .pic{
        img{
            width: 300px;
            height: 170px;
            object-fit: cover;
        }
    }
}
</style>