import axios from 'axios'
import {Message} from 'element-ui'

axios.defaults.timeout = 60000
axios.defaults.baseURL = 'http://42.51.181.42:18888/api'
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

axios.interceptors.request.use(
    request => {
        // request.headers.authorization = 'Bearer ' + localStorage.getItem('jwt')
        return request
    },
    err => Promise.reject(err)
)

axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        console.log('出错了：',error.response)
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    if (error.response.data.code === 'token_not_valid') {
                        Message({
                            message: '认证过期，请重新登录',
                            type: 'warning'
                        })
                    }
                    Message({
                        message: '账号或密码错误',
                        type: 'error'
                    })
                    break
                default:
                    Message(error.response.data)
            }
        }
    }
)
export default axios