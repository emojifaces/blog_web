<template>
    <div class="rich-text-container">
        <div id="editor"></div>
    </div>
</template>
<script>
import E from 'wangeditor'
// import wangEditorUploadImg from '../api/index'
export default {
    data(){
        return {
            editor: null,
            editorContent: ''
        }
    },
    methods:{
        clearArticle () {
            this.editor.txt.clear()
        }
    },
    mounted(){
        const _this = this
        const editor = new E('#editor')
        editor.config.onchange = (newHtml) => {
            this.editorContent = newHtml
        }
        editor.config.height = 800
        editor.config.zIndex = 100
        editor.create();
        this.editor = editor
        editor.config.uploadImgMaxLength = 1
        editor.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif']
        editor.config.customUploadImg = function (resultFiles, insertImgFn) {
            const file = resultFiles[0]
            const fd = new FormData()
            fd.set('file', file)
            _this.$axios.post('/wangEditor_uploadImg', fd, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('jwt')
                }
            }).then((res => {
                if (res.errno === 0) {
                    const imgUrl = res.data
                    insertImgFn(imgUrl)
                }
            }))
        }
    }
}
</script>