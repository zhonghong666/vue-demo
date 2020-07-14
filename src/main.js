import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入element-UI
import './plugins/element.js';
// 引入公共样式
import '@/assets/css/index.css';

Vue.config.productionTip = false; // 阻止启动生产消息

new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
