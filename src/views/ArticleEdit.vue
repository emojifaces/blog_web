<template>
    <div class="articleEdit-page-container">
        <el-input
        placeholder="请输入标题"
        v-model="title"
        clearable>
        </el-input>
        <rich-text  ref="richtext"></rich-text>
        <div class="set-article-cover">
            <div class="article-cover-title">
                <div>设置封面</div>
                <el-button type="text" v-show="isShowBtn" @click="deleteArticleCover">删除封面</el-button>
            </div>
            <el-tooltip class="item" effect="dark" content="不设置封面将显示默认图片" placement="right">
                <article-cover-upload @uploadImg="saveArticleCoverImg" ref="articlecover"></article-cover-upload>
            </el-tooltip>
        </div>
        <div class="article-edit-btn-box">
            <el-button type="text" @click="clearArticle">清空</el-button>
            <el-button type="text" @click="saveArticle">保存</el-button>
        </div>
    </div>
</template>
<script>
import RichText from '../components/RichText.vue'
import ArticleCoverUpload from '../components/ArticleCoverUpload.vue'
export default {
    components: {
        RichText,
        ArticleCoverUpload
    },
    data(){
        return {
            title: '',
            content: '',
            isShowBtn: false,
            img: null
        }
    },
    methods: {
        saveArticle () {
            const content = this.$refs.richtext.editorContent
            console.log(content)
        },
        clearArticle () {
            this.$refs.richtext.clearArticle()
        },
        saveArticleCoverImg (data) {
            if (data.file) {
                this.isShowBtn = true
                this.img = data.file
            }
        },
        deleteArticleCover () {
            this.$refs.articlecover.imgUrl = require('../assets/img/default_img.jpg')
            this.isShowBtn = false
        }
    }
}
</script>
<style lang="less" scoped>
.articleEdit-page-container{
    .set-article-cover{
        margin: 2rem 2rem;
        display: flex;
        .article-cover-title{
            margin-right: 2rem;
        }
    }
    .article-edit-btn-box{
        margin: 2rem 2rem;
        text-align: center;
        button{
            margin: 0 2rem;
        }
    }
}

</style>