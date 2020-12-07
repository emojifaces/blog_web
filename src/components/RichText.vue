<template>
    <div class="rich-text-container">
        <div id="editor"></div>
    </div>
</template>
<script>
import E from 'wangeditor'
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
        const editor = new E('#editor')
        editor.config.onchange = (newHtml) => {
            this.editorContent = newHtml
        }
        editor.config.zIndex = 100
        editor.create();
        this.editor = editor
    }
}
</script>