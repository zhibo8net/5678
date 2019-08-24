// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import el_module from 'element-ui'
import el_module from './el_module';
import configData from './config/configData';
import api from './api/index'
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';


Vue.config.productionTip = false;

Vue.prototype.configData = configData;
Vue.prototype.api = api;
Vue.prototype.DPlayer = DPlayer;

// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(el_module);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
