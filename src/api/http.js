import axios from 'axios'
// import {Message} from 'element-ui'

axios.defaults.timeout = 60000
axios.defaults.baseURL = 'http://42.51.181.42:18888/api'

axios.interceptors.request.use(
    request => {
        request.headers.auauthorization = 'Bearer ' + localStorage.getItem('jwt')
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
    }
)
export default axios