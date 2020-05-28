<template>
    <v-layout row wrap>
    <!-- Render the stock component passing its values thought "props" ("props" is defined inside the child component) -->
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-layout>
</template>

<script>
//import child element
import Stock from './Stock'


import {mapGetters} from 'vuex'


export default {
  components: {Stock},

   //Remember that this value already has been updated througt the "create()" method inside "App.vue" file

  computed: {
    //Using mapGetters to call the State Manager method
    //"stockPorfolio" will get every Stock the user already bougth
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
};
</script>


<style>
</style>