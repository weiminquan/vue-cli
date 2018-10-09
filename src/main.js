// 导入根组件
import Vue from 'vue'
// 打开外层根实例
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
