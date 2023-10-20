<template>
  <div>
    <Navigation/>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  }
}
</script>


<style>
#app {
  background-color: #1C1C1C;
  color: #dbd7d2;
  display: flex;
  justify-content: center;
  text-align: center;
  
}
</style>
