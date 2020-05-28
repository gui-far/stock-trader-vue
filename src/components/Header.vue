<!-- 95% of this file is HTML + Vuetify -->
<!-- Commenting only the significant parts... -->

<template >
  <v-app-bar app>

    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn text to="/">Início</v-btn>
      <v-btn text to="/portfolio">Portfólio</v-btn>
      <v-btn text to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text @click="endDay">Finalizar Dia</v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn text @click="saveData">Salvar Dados</v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn text @click="loadDataLocal">Carregar Dados</v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn text @click="endDay">Finalizar Dia</v-btn>
    </v-toolbar-items>

    <v-layout align-center>
      <span class="text-uppercas grey--text text--darken-2">Saldo:</span>

      <!-- "funds" is a calculated method; therefore, every time this value is changed, it will also be updated on the screen -->
      <!-- Calling the currency filter ( was registered globally inside "main.js" ) -->
      {{funds | currency}}

    </v-layout>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  computed: {
    //This will be called only when "funds" variable changes (since its a computed method)
    //The "funds" value is actually managed by Vuex (state manager)
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(['randomizeStocks','loadData']),
    //Will change the stock price (randomize...)
    //Since the stocks are components, their state are also been managed by Vuex
    endDay() {
      this.randomizeStocks()
    },
    //This method will access the axios $http method
    //"$ http" was registered globally inside "axios.js" file
    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters;
      this.$http.put('data.json', {funds, stockPortfolio, stocks})
    },
    loadDataLocal() {
      this.loadData()
    }
  }
};
</script>

<style>
</style>