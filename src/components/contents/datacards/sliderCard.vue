<template>
        <div class="column notification is-dark has-text-light">
            <div class="has-text-centered text">Slider</div>
            <br>
            <div class="has-text-centered text is-size-3">{{value}}%</div>
            <b-field :class="{'slider-index': this.$store.getters.returnSideMenuState === 'close', 'is-relative': this.$store.getters.returnSideMenuState === 'close'}">
                <b-slider type="is-light" :tooltip="false" v-model="value"></b-slider>
            </b-field>
        </div> 
</template>

<script>
export default {
    data(){
        return{
            value: 50
        }
    }
}
</script>

<style>
.slider-index{
  z-index: 4;
}
</style>