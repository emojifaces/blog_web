import Vue from "vue"
import VueRouter from "vue-router"
import Index from '../views/Index.vue'
import Message from '../views/Message.vue'
import Article from '../views/Article.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import IndexCarousel from '../components/IndexCarousel.vue'
import UserInfo from '../views/UserInfo.vue'
import store from '../store/index'

Vue.use(VueRouter)


const routes = [
    { 
        path: '',
        component:Index,
        children: [
            {   
                name: 'index',
                path: '',
                component: IndexCarousel
            },
            {   
                name: 'messageList',
                path: '/message',
                component: Message
            },
            {   
                name: 'articleList',
                path: '/article',
                component: Article
            },
            {   
                name: 'articleCreate',
                path: '/article/editor',
                component: ArticleEdit,
                meta: { requiresAuth: true }
            },
            {   
                name: 'articleDetailEdit',
                path: '/article/edit/:articleId',
                component: ArticleEdit,
                meta: { requiresAuth: true }
            },
            {   
                name: 'articleDetail',
                path: '/article/:articleId',
                component: ArticleDetail
            },
            {   
                name: 'userInfo',
                path: '/userInfo',
                component: UserInfo,
                meta: { requiresAuth: true }
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    const loginState = store.state.loginState
    if (to.meta.requiresAuth) {
        if (loginState) {
            next()
        } else {
            next('/')
        }
    } else {
        next()
    }
})

export default router
