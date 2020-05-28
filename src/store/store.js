import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

//THIS IS THE STATE MANAGER
//This is very important and will be use along all the app
export default new Vuex.Store({
    
    //The state manager uses MODULES
    modules: {
        stocks,
        portfolio
    }
})