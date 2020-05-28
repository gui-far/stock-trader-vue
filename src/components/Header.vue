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

    <v-menu offset-y>
      <!-- This v-slot... -->
      <template v-slot:activator="{ on: menu }">
        <v-toolbar-items>
          <v-btn text @click="endDay">Finalizar Dia</v-btn>
          <!-- ... and this v-on -->
          <v-btn text to="/" v-on="{ ...menu }">Dropdown</v-btn>
        </v-toolbar-items>
      </template>
      <!-- ...will call these items -->
      <v-list>
        <v-list-item>
          <v-list-item-title>Salvar Dados</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Carregar Dados</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-layout align-center>
      <span class="text-uppercas grey--text text--darken-2">Saldo:</span>

      <!-- "funds" is a calculated method; therefore, every time this value is changed, it will also be updated on the screen -->
      <!-- Calling the currency filter ( was registered globally inside "main.js" ) -->
      {{funds | currency}}

    </v-layout>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    //This will be called only when "funds" variable changes (since its a computed method)
    //The "funds" value is actually managed by Vuex (state manager)
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    //Will change the stock price (randomize...)
    //Since the stocks are components, their state are also been managed by Vuex
    endDay() {
      this.$store.dispatch("randomizeStocks");
    }
  }
};
</script>

<style>
</style>