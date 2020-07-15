import HttpRequest from './httpRequest';

const httpRequest = new HttpRequest();

const defaultHeaders = {
    'Content-Type': 'application/json;charset=UTF-8'
}
let formatQueryString = function (params) {
    if (!params) {
        return '';
    }
    delete params['__forbid_network_error_processor'];
    return Object
        .keys(params)
        .sort()
        .map(function (key) {
            var val = params[key];
            if (Array.isArray(val)) {
                return val
                    .sort()
                    .map(function (val2) {
                        return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
                    })
                    .join('&');
            }
            return encodeURIComponent(key) + '=' + encodeURIComponent(val);
        })
        .join('&');
};
function get(url, params, headers) {
    let queryString = formatQueryString(params);
    if (queryString) {
        if (url.search(/\?/) === -1) {
            url += '?' + queryString;
        } else {
            url += '&' + queryString;
        }
    }
    return httpRequest.request({
        url: url,
        data: params,
        method: 'get',
        headers: headers || defaultHeaders
    });
}
function post(url, params, headers) {
    return httpRequest.request({
        url: url,
        data: params,
        method: 'post',
        headers: headers || defaultHeaders
    });
}
const HttpUtil = {
    get: get,
    post: post
}

export default HttpUtil