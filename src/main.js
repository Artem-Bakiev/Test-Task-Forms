import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(ElementUI, { locale });

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
