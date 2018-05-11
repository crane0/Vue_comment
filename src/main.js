import Vue from 'vue'
import App from './App'

//bootstrap不能在这里引入，要放在static作为静态资源，在html中引入
// import './assets/bootstrap.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
