<template>
    <div class="indexCarousel-container">
        <el-carousel height="600px" direction="vertical" autoplay>
            <el-carousel-item v-for="item in imgList" :key="item">
                <img :src="item" alt="" style="width:100%;height:100%;">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgList: [
            require('../assets/img/default_img.jpg'),
            require('../assets/img/img1.jpg'),
            require('../assets/img/img2.jpg'),
            require('../assets/img/img3.jpg'),
            require('../assets/img/img4.jpg')
            ]
        }
    }
}
</script>
<style lang="less" scoped>

</style>