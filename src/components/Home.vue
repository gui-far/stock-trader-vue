
<!--Just some content for the home, explain how the app works-->
<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
    <v-sheet :elevation="6" class="pa-2 primary">
      <span class="headline white--text font-weight-light">Você pode Salvar e Carregar os dados</span>
    </v-sheet>

    <v-sheet :elevation="6" class="pa-2 success darken-1 mt-3">
      <span class="headline white--text font-weight-light">Clique em "Finalizar Dia" para iniciar um novo dia!</span>
    </v-sheet>

    <v-divider class="my-4" />

    <p calss="display-1">
      <!--Funds to Currency Format -->
      <strong>Seu Saldo:</strong> {{funds | currency}}
    </p>
  </div>
</template>

<script>
export default {
  //Ger funds from state manager
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style>
</style>