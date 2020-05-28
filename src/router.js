//Import vue
import Vue from 'vue'

//This "router" will make the component rendering according with the path
import Router from 'vue-router'

//Import components
import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'
import Stocks from './components/stocks/Stocks'

//Use router...
Vue.use(Router)

export default new Router({


    //Here you can set "hash" or "history"

    //Hash: 
    //Exmaple: www.mainpage.com/#/users
    //When the url uses "#", so the request will be for the main page "www.mainpage.com/" ("index.html" inside the server) , then vue will identify the rest of the path (#/users).

    //For this case, use hash mode


    //History:
    //Exmaple: www.mainpage.com/users
    //In this case, the request will be for the "mainpage.com/users". Note that "mainpage.com/" is different of "mainpage.com/users".
    //If the request occurs for the "mainpage.com/users", then we will have a problem.
    //Problem: The vue instance runs under the "mainpage.com/", so if the request occurs for the "mainpage.com/users",
    //In this case VUE will not be able to resolve the ROUTES PATHS through VUE-ROUTER, and the components will not be load.
    
    //For this case, use history mode

    mode: 'history',

    //Routes -> Components
    routes: [
        {path: '/', component: Home},
        {path: '/portfolio', component: Portfolio},
        {path: '/stocks', component: Stocks},
    ]
})