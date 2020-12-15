<template>
    <div class="articleEdit-page-container">
        <el-input
        placeholder="请输入标题"
        v-model="title"
        clearable>
        </el-input>
        <rich-text ref="richtext" :oldContent="originalContent"></rich-text>
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
            isShowBtn: false,
            img: null,
            originalContent: '',
            action: null,
            articleId: null
        }
    },
    methods: {
        saveArticle () {
            const loading = this.$loading({
                lock: true,
                text: '文章发布中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            const content = this.$refs.richtext.editorContent
            if (!this.title) {
                this.$message({
                    showClose: true,
                    message: '标题不能为空',
                    type: 'error'
                })
            } else if (!content) {
                this.$message({
                    showClose: true,
                    message: '正文不能为空',
                    type: 'error'
                })
            } else {
                var url = null
                if (this.action === 'create') {
                    url = '/article/'
                } else if (this.action === 'edit') {
                    url = '/article/' + this.articleId + '/update_article/'
                }
                const fd = new FormData()
                fd.set('title', this.title)
                fd.set('content', content)
                if (this.img) {
                    fd.set('img', this.img)
                }
                this.$axios.post(url, fd).then(res => {
                    if (res.status === 1) {
                        this.$router.push('/article')
                    }
                }).finally(() => {
                    loading.close()
                })
            }
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
    },
    created(){
        this.$store.commit('setPostDisabled', { disabled: true })
    },
    mounted(){
        const id = this.$route.params.articleId
        if (id) {
            // 文章编辑模式
            this.action = 'edit'
            this.articleId = id
            const loading = this.$loading({
                lock: true,
                text: '加载中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            this.$axios.get('/article/' + id)
            .then(res => {
                if (res.status === 1) {
                    this.title = res.data.title
                    this.originalContent = res.data.content
                    this.$refs.articlecover.imgUrl = res.data.img
                }
            }).finally(() => {
                loading.close()
            })
        } else {
            // 文章创建模式
            this.action = 'create'
        }
    },
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