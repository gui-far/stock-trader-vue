//Axios will allow us to make requests
import Vue from 'vue'
import axios from 'axios'

//Axios isn't a plugin
//So you need to "install manually"
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://stock-trader-vue-firebase.firebaseio.com/'
        })
    }
})