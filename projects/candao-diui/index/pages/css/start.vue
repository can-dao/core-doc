<template>
<div class="index">
  <di-markdown :content="mds.color" id="md-intro"></di-markdown>
</div>
</template>

<script>
import * as Com from '@/common'
import * as Utils from 'build/plugs/utils'

export default{
  name: 'css-base'
  ,data(){
    return {
      mds:{
        color:require('./start.md')
      }
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