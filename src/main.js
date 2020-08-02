import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/Element/ElementUi'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/Overall.less'
import axios  from 'axios'
import VueAxios from "vue-axios";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import '../src/views/Comp/index'

import VueLazyload from "vue-lazyload";

import code from './views/publicJS/code'
Vue.use(VueLazyload)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
axios.defaults.baseURL = "http://localhost:3000/"

//配置全局过滤器 数量大于1万的在后面加上万
Vue.filter('wan',function (val) {
    if (val > 10000){
     return (Math.floor(val / 10000)) + '万'
    }
    return val
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
