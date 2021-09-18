// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Button from 'ant-design-vue/lib/button'
import Table from 'ant-design-vue/lib/table'
import 'ant-design-vue/dist/antd.css'

Vue.component(Button.name, Button)
Vue.component(Table.name, Table)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
