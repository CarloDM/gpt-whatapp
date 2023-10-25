  <script>
  import BaseComp from './components/base-component.vue';
  import {store} from './store/store.js'
  // import OpenAI from "openai";

  export default {
    name:'App',
    data(){
      return{
        store
      }
    },
    components:{BaseComp},
    methods:{},
    mounted(){},
  }
  
  </script>

<template>
  <div class="main_wrapper">

    <BaseComp />

  </div>
</template>

<style lang="scss">

</style>
