<template>
<div class="empty-parent">
  <transition name="fade"><keep-alive><router-view></router-view></keep-alive></transition>
</div>
</template>

<script>
import * as Com from '@/common'
export default{
  name: 'empty-parent'
  ,data(){
    return {
      
    }
  }
  ,created(){
    Com.hide();
  }
  ,mounted(){

  }
  ,methods:{
    
  }
  ,components:{
    
  }
  ,computed:{
  }
}
</script>

<style scoped>

</style>

<style>

</style>