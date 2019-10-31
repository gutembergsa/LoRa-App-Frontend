<template>
    <div>
      <Navbar/>
      <ContentDiv/>
    </div>
</template>

<script>
import ContentDiv from './components/ContentDiv.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    ContentDiv
  }
}
</script>
<style>

</style>

