import Vue from 'vue'
import App from './App.vue'
import navbar from './components/navHeader.vue'

Vue.config.productionTip = false

Vue.component("navbar-vue", navbar);

new Vue({
  render: h => h(App),
}).$mount('#app')
