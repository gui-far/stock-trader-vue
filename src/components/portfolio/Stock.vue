<!--This is the stock component's template used for the "Selling" Session -->
<!--Here we use "props" to pass values from the "Father Component" to the "Child Component" -->

<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <!--Values passed by "props"-->
        <strong>{{stock.name}}<small>
          (Preço: {{stock.price | currency}} | Qtde: {{stock.quantity}})
          </small>
          </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <!--Validation, do not allow to sell more shares than the user has-->
        <v-text-field label="Quantidade" type="number" v-model.number="quantity"
        :error="insuficientQuantity"/>

        <!--Allow Sell if everything OK-->
        <v-btn class="blue darken-3 white--text" 
        @click="sellStock"
        :disabled="validateQuantity || insuficientQuantity">Vender</v-btn>
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
    
    //Check if quantity is negative
    validateQuantity() {
      return this.quantity <= 0 || !Number.isInteger(this.quantity);
    },

    //Check if selling amount is bigger than current amount
    insuficientQuantity() {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    //Sell stock method
    sellStock() {
      const order = {
        //Remember that this "stock" were passed by props
        stockId: this.stock.id,
        stockPrice: this.stock.price,

        //While the quantity is being taken from the screen
        quantity: this.quantity
      }

      //Call the sellStock from the State Manager (Vuex)
      this.$store.dispatch('sellStock', order)

      //Clear quantity from screen
      this.quantity = 0

    }
  }

};
</script>

<style>
</style>