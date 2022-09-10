import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
console.log(123)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
