//This is a separete file because it will manipulate data from both modules
//This is not so specific to be inside onde module

import Vue from 'vue'

export default {
    loadData({commit}) {
        Vue.prototype.$http('data.json').then (resp => {
            const data = resp.data
            if(data) {
                commit('setStocks', data.stocks)
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        })
    }
}