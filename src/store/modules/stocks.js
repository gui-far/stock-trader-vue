//This is the state of the Market

//Here we have the initial data (stocks that we will be able to buy)
import stocks from '../../data/stocks'

export default {
    state: {
        //ATTENTION HERE:
        //THE PORTFOLIO.JS MODULE ALSO HAVE A "stocks: []" variable
        //BUT THEY ARE DIFFERENT
        stocks: []
    },
    //Mutations will definitely change the state
    mutations: {
        //The names are self-explanatory
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state) {
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
            })
        }
    },
    //Actions will be called from components
    //Actions will commit mutations
    actions: {
        //The names are self-explanatory
        buyStock({commit}, order) {
            commit('buyStock', order);
        },
        initStocks({commit}) {
            console.log('initStocks...')
            commit('setStocks', stocks)
        },
        randomizeStocks({commit}){
            commit('randomizeStocks')
        }
    },
    //Get soma data from state
    getters: {
        //The names are self-explanatory
        stocks(state){
            return state.stocks
        }
    }
}