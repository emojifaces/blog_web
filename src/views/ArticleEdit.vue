<template>
    <div class="articleEdit-page-container">
        <el-input
        placeholder="请输入标题"
        v-model="title"
        clearable>
        </el-input>
        <rich-text  ref="richtext"></rich-text>
        <div class="set-article-cover">
            <span>设置封面</span>
            <article-cover-upload></article-cover-upload>
        </div>
        <el-button type="text" @click="clearArticle">清空</el-button>
        <el-button type="text" @click="saveArticle">保存</el-button>
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
            content: ''
        }
    },
    methods: {
        saveArticle() {
            const content = this.$refs.richtext.editorContent
            console.log(content)
        },
        clearArticle() {
            this.$refs.richtext.clearArticle()
        }
    }
}
</script>