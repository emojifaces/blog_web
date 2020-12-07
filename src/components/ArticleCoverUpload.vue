<template>
    <div class="articleCoverUpload-container"  @mouseleave="hideCover">
        <div class="pic"  @mouseover="showCover">
            <img :src="imgUrl" alt="文章封面">
        </div>
        <div class="pic-cover" v-show="isShowCover" @click="clickArticleCOver">
            <div class="el-icon-picture-outline icon"></div>
            <div class="title">设置文章封面</div>
        </div>
        <input type="file" id="articleCoverImg" @change="uploadImg">
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgUrl: require('../assets/img/default_img.jpg'),
            isShowCover: false
        }
    },
    methods: {
        showCover(){
            this.isShowCover = true
        },
        hideCover(){
            this.isShowCover = false
        },
        clickArticleCOver(){
            document.getElementById('articleCoverImg').click()
        },
        uploadImg(file){
            const _this = this
            const img = file.target.files[0]
            if (img) {
                const fd = new FileReader()
                fd.readAsDataURL(img)
                fd.onloadend = function () {
                    const imgUrl = this.result
                    _this.imgUrl = imgUrl
                }
                this.$emit('uploadImg', { file: img })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.articleCoverUpload-container{
    width: 300px;
    height: 170px;
    position: relative;
    input{
        visibility: hidden;
        display: none;
    }
    .pic{
        img{
            width: 300px;
            height: 170px;
            object-fit: cover;
        }
    }
    .pic-cover{
        width: 300px;
        height: 170px;
        position: absolute;
        background-color: black;
        top: 0;
        opacity: 0.6;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .icon{
            color: white;
            font-size: xxx-large;
        }
        .title{
            color: white;
            margin-top: 0.5rem;
        }
    }
}
</style>