
export default {
    //ATTENTION HERE:
    //THE STOCKS.JS MODULE ALSO HAVE A "stocks: []" variable
    //BUT THEY ARE DIFFERENT
    state: {
        funds: 10000,
        stocks: []
    },
    //Mutations will definitely change the state
    //The names are self-explanatory
    mutations: {
        //The names are self-explanatory
        buyStock(state, {stockId, quantity, stockPrice}) {
            const record = state.stocks.find(element => element.id == stockId)
            if(record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        //The names are self-explanatory
        sellStock(state, {stockId, quantity, stockPrice}) {
            const record = state.stocks.find(element => element.id == stockId)
            if(record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        }
    },

    //Actions will be called from components
    //Actions will commit mutations
    actions: {
        //The names are self-explanatory
        sellStock({commit}, order) {
            commit('sellStock', order)
        }
    },

    //Get soma data from state
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        //Return the current user money
        funds(state){
            return state.funds;
        }
    }
}