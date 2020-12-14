import Vue from "vue"
import VueRouter from "vue-router"
import Index from '../views/Index.vue'
import Message from '../views/Message.vue'
import Article from '../views/Article.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import IndexCarousel from '../components/IndexCarousel.vue'
import UserInfo from '../views/UserInfo.vue'

Vue.use(VueRouter)


const routes = [
    { 
        path: '',
        component:Index,
        children: [
            {
                path: '',
                component: IndexCarousel
            },
            {
                path: '/message',
                component: Message
            },
            {
                path: '/article',
                component: Article
            },
            {
                path: '/article/editor',
                component: ArticleEdit
            },
            {
                path: '/article/edit/:articleId',
                component: ArticleEdit
            },
            {
                path: '/article/:articleId',
                component: ArticleDetail
            },
            {
                path: '/userInfo',
                component: UserInfo
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
