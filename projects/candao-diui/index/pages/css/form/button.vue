<template>
<div>
  <di-markdown :content="mds.button"></di-markdown>

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
        button:require('./button.md')
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