import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import {routes} from './components/routes'

Vue.config.productionTip = false

Vue.mixin({
  data(){
    return{
      pathOrigin: window.location.origin
    }
  }
});

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
