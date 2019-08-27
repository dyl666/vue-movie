import Vue from 'vue'
import App from './App.vue'
import router from './routers'//引入router   
import store from './stores'


// axios http 请求
import Http from './assets/js/http'
Vue.prototype.$http = Http;
// Vue.prototype.axios = axios; 

Vue.config.productionTip = false;


Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
})

// scroll component
import Scroller from '@/components/Scroller'
Vue.component('Scroller', Scroller);

// loading component
import Loading from '@/components/Loading'
Vue.component('Loading', Loading);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
