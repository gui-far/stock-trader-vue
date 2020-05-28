<template>
  <v-app>

    <!--Header componente -->
    <Header />

    <v-content>
      <v-container>

        <!-- This transiction tag will make the animation defined in css -->
        <!-- "out-in" will make the element "leave" the screen before the new one appears -->
        <transition name="slide" mode="out-in">

          <!-- Router View is  registred globaly inside "main.js"-->
          <router-view></router-view>

        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
//Import the header component
import Header from "./components/Header";

export default {
  //Header component,
  components: { Header },

  //This method will run when the app starts, then some initial data (data >> stocks.js)
  created() {
    this.$store.dispatch("initStocks");
  }

};
</script>

<style>
/*Apearing*/
@keyframes slide-in {
  from {
    transform: translateX(-500px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }

}

.slide-enter-active {
  animation: slide-in 0.15s ease;
}

/*Disappearing*/
@keyframes slide-out {

  from {
    transform: translateX(0px);
    opacity: 1;
  }
  
  to {
    transform: translateX(500px);
    opacity: 0;
  }

}

.slide-leave-active {
  animation: slide-out 0.15s ease;
}
</style>
