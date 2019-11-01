<template>
  <div id="app">
    <Navbar/>
    <ContentDiv/>
  </div>
</template>

<script>
import ContentDiv from './components/ContentDiv.vue'
import Navbar from './components/Navbar.vue'

export default {
  beforeCreate(){
    this.$store.dispatch('triggerResponsividade');
  },
  mounted(){
    window.addEventListener('resize', () => this.$store.dispatch('triggerResponsividade'));
  },
  components:{
    Navbar,
    ContentDiv
  }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>


<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$purple: #8A4D76;
$pink: rgb(255, 99, 132);
$pink-invert: findColorInvert($pink);
$brown: #757763;
$beige-light: #D0D1CD;
$beige-lighter: #EFF0EB;

$grey-darker: hsl(0, 0%, 21%);
$grey-darker-invert: findColorInvert($grey-darker);

// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
$grey-dark: $brown;
$grey-light: $beige-light;
$widescreen-enabled: false;
$fullhd-enabled: false;

$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "pink": ($pink, $pink-invert),
    "twitter": ($twitter, $twitter-invert),
    "grey-darker": ($grey-darker, $grey-darker-invert),
);


// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";


//DAQUI EM DIANTE MODIFICAÇÕES EM ELEMENTOS DIRETAMENTE
.menu-list a.is-active{
 background-color: $danger
}

</style>
