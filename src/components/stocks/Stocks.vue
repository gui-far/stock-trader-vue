<template>
  <v-layout row wrap>
    <!-- Render the stock component passing its values thought "props" ("props" is defined inside the child component) -->
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>

<script>
//Import the child element
import Stock from "./Stock";

export default {
  components: { Stock },

  //Here we have the stocks offered on the market that we can buy
  //Remember that this value already has been updated througt the "create()" method inside "App.vue" file
  computed: {

    //This is one way to access the State Manager
    //The other way is inside "Portfolio.vue" file, there we use ...mapGetters from "vuex"
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style>
</style>