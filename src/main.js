//This file is the entrypoint

//Import vue...
import Vue from 'vue'

//Import App...
import App from './App.vue'

//Vuetify its a framework like Bootstrap
import vuetify from './plugins/vuetify'

//router will handle the paths and switch component should be exhibit
import router from './router'

// This "store" use the "vuex"
// "Vuex" its a kind of "State Manager".
// With Vuex make easier to manipulate components state and the data flow between then
import store from './store/store'

//No tips on startup
Vue.config.productionTip = false

//This is an Filter that will work globally
//Will just add the currency prefix
Vue.filter('currency', value => {
  return 'R$ ' + value.toLocaleString();
})

//Vue instance
new Vue({
  //Use router...
  router,

  //Use store (vuex)...
  store,

  //Use Frontend....
  vuetify,

  //"Print" the App...
  render: h => h(App)

  //"Print" the App inside div #app inside public >> index.html
}).$mount('#app')
