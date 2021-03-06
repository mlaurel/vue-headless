import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'http://vue-headless:8888/wp-json';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
