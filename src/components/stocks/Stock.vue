<!--This is the stock component's template used for the "Buying" Session -->
<!--Here we use "props" to pass values from the "Father Component" to the "Child Component" -->

<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <!--Values passed by "props"-->
        <strong>{{stock.name}}<small>(Preço: {{stock.price | currency}})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <!-- Validation check if have enough money to buy that amount of stocks -->
        <v-text-field :error="insufficientFunds " label="Quantidade" type="number" v-model.number="quantity"/>
        
        <!--Allow buy stocks if all validations are ok-->
        <v-btn class="green darken-3 white--text" @click="buyStock"
        :disabled="validateQuantity || insufficientFunds">{{ insufficientFunds ? 'Saldo Insuf.' : 'Comprar'}}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  //This is the "prop", were passed by the Father component
  //Its kind like an "Object" therefore has it ows properties
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    //Check if the quantity is negative, decimal, 
    validateQuantity() {
      return this.quantity <= 0 || !Number.isInteger(this.quantity);
    },
    //Get the current money that we have
    funds() {
      return this.$store.getters.funds;
    },
    //Check if have enough money to buy that amount of stocks
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    //Buy stock method
    buyStock() {
      const order = {
        //Remember that this "stock" were passed by props
        stockId: this.stock.id,
        stockPrice: this.stock.price,

        //While the quantity is being taken from the screen
        quantity: this.quantity
      }

      //Call the buyStock from the State Manager (Vuex)
      this.$store.dispatch('buyStock', order)

      //Clear the quantity from screen
      this.quantity = 0

    }
  }

};
</script>

<style>
</style>