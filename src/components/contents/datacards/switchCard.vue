<template>
    <div class="column notification is-dark has-text-light">
        <div class="has-text-centered text">Switch</div>
        <br>
        <div class="field" :class="{'slider-index': this.$store.getters.returnSideMenuState === 'close', 'is-relative': this.$store.getters.returnSideMenuState === 'close'}">
            <b-switch size="is-large" v-model="isSwitched"></b-switch>
        </div>
        <div v-if="showStatus" class="has-text-left text is-size-6">Status: {{this.isSwitched ? 'Ativo' : 'Desativado'}}</div>
    </div>      
</template>

<script>
export default {
    data(){
        return{
            isSwitched: false,
        }
    },
    props:{
        showStatus: Boolean
    }
}
</script>

<style>

</style>