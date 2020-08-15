import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import {routes} from './components/routes'


import VueParticles from 'vue-particles'
Vue.use(VueParticles);



Vue.config.productionTip = false

Vue.mixin({
  data(){
    return{
      pathOrigin: window.location.origin,
      
    }
  }
});

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      console.log(to);
      console.log(from);
      console.log(savedPosition);
      return { x: 0, y: 0 }
    }
});


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
