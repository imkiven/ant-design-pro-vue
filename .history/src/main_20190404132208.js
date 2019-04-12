import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from '@/utils/request' // axios 不建议引入到 Vue 原型链上
// 引入echarts
import './core/use'
import bootstrap from './core/bootstrap'
import 'lib-flexible'
import '@/permission' // permission control
import '@/utils/filter' // global filter
import ECharts from 'vue-echarts'
// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/legend'

Vue.config.productionTip = false

Vue.use(VueAxios, router)
Vue.component('v-chart', ECharts)

new Vue({
  router,
  store,
  created () {
    bootstrap()
  },
  render: h => h(App)
}).$mount('#app')
