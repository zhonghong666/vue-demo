import HttpUtil from '@/utils/httpUtil';

export const getHome = (params) => {
    return HttpUtil.get('/book/app/book', params);
}