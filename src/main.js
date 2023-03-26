import SmoothScroll from 'smooth-scroll';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'animate.css';

Vue.config.productionTip = false;

// eslint-disable-next-line
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
