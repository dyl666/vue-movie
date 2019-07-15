import Vue from 'vue'
import App from './App.vue'
import router from './routers'//引入router  

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
