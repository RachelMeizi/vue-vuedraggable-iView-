import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// iView 和 iView Pro
import ViewUI from 'view-design';
import iViewPro from '@/libs/iview-pro/iview-pro.min.js';
// 使用样式，修改主题可以在 styles 目录下创建新的主题包并修改 iView 默认的 less 变量
// 参考 https://www.iviewui.com/docs/guide/theme
import '@/libs/iview-pro/iview-pro.css';
// import 'swiper/dist/css/swiper.css'
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.less';


Vue.use(ViewUI)
Vue.use(iViewPro)
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
