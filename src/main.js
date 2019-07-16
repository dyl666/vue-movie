import Vue from 'vue'
import App from './App.vue'
import router from './routers'//引入router  
// import axios from 'axios' // 引用axios


// axios http 请求
import Http from './assets/js/http'
Vue.prototype.$http = Http;
// Vue.prototype.axios = axios;


Vue.config.productionTip = false;


Vue.filter('setWH', (url, arg) => { 
  return url.replace(/w\.h/, arg);
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
