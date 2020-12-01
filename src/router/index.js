import Vue from "vue"
import VueRouter from "vue-router"
import Index from '../views/Index.vue'
import Message from '../views/Message.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)


const routes = [
    { path: '', component:Index  },
    { path: '/message', component: Message },
    { path: '/article', component: Article },
]

const router = new VueRouter({
    routes
})

export default router
