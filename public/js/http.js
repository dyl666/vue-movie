
import axios from 'axios' // 引用axios
// import { MessageBox, Message } from 'element-ui'
import Qs from 'qs' //引入数据格式化 

// axios 配置
axios.defaults.timeout = 50000 //设置接口响应时间

// http request 拦截器，通过这个，我们就可以把Cookie传到后台
axios.interceptors.request.use(
    config => {
        // console.log('请求路径', config.url) 
        if (config.url === '/upload') {
            // 此处设置文件上传，配置单独请求头
            config.headers = {
                'Content-Type': 'multipart/form-data'
            }
        } else {
            config.headers = {
                'Content-Type': 'application/x-www-form-urlencoded' // 设置跨域头部
            }
            config.data = Qs.stringify(config.data)
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        // console.log('请求拦截返回参数', response)
        if (response.status === 200 || response.status === 0) {
            // 成功
            let returnCode = response.data.code
            if (returnCode > 10000 && returnCode < 20000) {
                console.log('成功', response)
            } else if (returnCode >= 20000 && returnCode < 30000) {
                // 只弹窗，不操作
                console.log('失败1', response)
            } else if (returnCode >= 30000 && returnCode < 40000) {

            }
        }
        return response;
    },
    err => {
        var originalRequest = err.config;
        if (err.code == 'ECONNABORTED' && err.message.indexOf('timeout') != -1 && !originalRequest._retry) {
            originalRequest._retry = true;
            return axios.request(originalRequest);
        }
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    console.log("err code" + err.response.status + ':错误请求');
                    break;
                case 500:
                    console.log("err code" + err.response.status + ':服务器端出错');
                    break;
                default:
                    console.log("".concat(err.response.status, ":\u8FDE\u63A5\u9519\u8BEF"));
            }
        }
        console.log(err.toString().trim())
        if (err.response) {
            return Promise.reject(err.response.data)
        } else {
            return Promise.reject(err)
        }

    }
)



/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params
            })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            response => {
                // console.log(response.data.code)
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            response => {
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put (url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            response => {
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
    })
}

