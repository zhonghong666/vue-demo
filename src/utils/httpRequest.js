import Axios from 'axios';
import config from '@/config/config.js';
import {Message} from 'element-ui';

// const baseURL = config.baseUrl[process.env.VUE_APP_ENV];
const baseURL = '/api';

/**
 * HTTP请求类
 */
class HttpRequest {
    constructor() {
        this.options = {
            method: '',
            url: ''
        }
        // 存储请求队列
        this.queue = {};
        this.pending = [];
    }
    // 销毁请求实例
    destroy(url) {
        delete this.queue[url];
        const queue = Object.keys(this.queue);
        return queue.length;
    }
    // 请求拦截
    interceptors(instance, url) {
        const CancelToken = Axios.CancelToken;
        const removePending = (config) => { // 取消请求操作
            for (const [index, value] of this.pending.entries()) {
                if (value.u === config.url + '&' + config.method + '&' + JSON.stringify(config.data)) {
                  value.cancel('重复请求被取消,url：' + config.url)
                  this.pending.splice(index, 1)
                }
            }
        }
        // 添加请求拦截器
        instance.interceptors.request.use(config => {
            if (!window.navigator.onLine) {
                Message.warning('您的网络状况不好，请重新连接');
                return false;
            }
            removePending(config)
            config.cancelToken = new CancelToken(c => {
                this.pending.push({
                    u: config.url + '&' + config.method + '&' + JSON.stringify(config.data),
                    cancel: c
                })
            })
            // Spin.show()
            // 在发送请求之前做些什么
            return config
        }, error => {
            // 对请求错误做些什么
            alert(JSON.stringify(error))
            return Promise.reject(error)
        })

        // 添加响应拦截器
        instance.interceptors.response.use((res) => {
            removePending(res.config)
            let {data} = res;
            const is = this.destroy(url);
            if (!is) {
                setTimeout(() => {
                    // Spin.hide()
                }, 500)
            }
            if (!(data instanceof Blob)) {
                if (data.res_code !== 0) {
                    if (data.status == -1) {
                        if (data.msg) console.log("后台返回错误：" + data.msg)
                    } else if (data.status == 500) {
                        Message.warning('服务器异常，请联系管理员');
                    } else if (data.status == 502) {
                        window.location.href = '/#/401' //权限不够
                    }
                }
            }
            return res;
        }, (error) => {
            if (/timeout/.test(error.toString())) {
                Message.warning('请求超时,重新刷新页面~');
            }
            // 对响应错误做点什么
            return Promise.reject(error)
        })
    }
    // 创建实例
    create(_options) {
        let URLbase = baseURL
        if (_options.version) {
            let url_arr = baseURL.split("/");
            url_arr[url_arr.length - 2] = _options.version;
            URLbase = url_arr.join("/");
        }
        let conf = {
            baseURL: URLbase,
            withCredentials: true,
            timeout: 60000
        }
        return Axios.create(conf)
    }
    // 合并请求实例
    mergeReqest(instances = []) {
        return new Promise((resolve, reject) => {
            Axios.all(instances).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }
    // 请求实例
    request(options) {
        let instance = this.create(options);
        this.interceptors(instance, options.url);
        options = Object.assign({}, options);
        this.queue[options.url] = instance;
        return instance(options);
    }
}

export default HttpRequest