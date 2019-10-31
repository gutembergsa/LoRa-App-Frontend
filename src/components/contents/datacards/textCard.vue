<template>
    <div class="column notification" :class="bulmaColor">
        <label class="title has-text-centered">{{title}}</label>
        <br>
        <span class="text is-size-1">
            <i v-if="showIcon" :class="icon"></i>
        </span>
        <span class="text" :class="{'is-size-1': !showIcon, 'is-size-2': showIcon}">
            {{valorBruto}}  
        </span>
        {{unidade}}
        <br>
        <span class="text is-size-5">
            {{grandeza}}
        </span>          
    </div>
</template>

<script>
export default {
    props:{
        title: String,
        valorBruto: String && Number,
        unidade: String,
        grandeza: String,
        showIcon: Boolean,
        icon: String,
        bulmaColor: String
    }
}
</script>

<style>

</style>