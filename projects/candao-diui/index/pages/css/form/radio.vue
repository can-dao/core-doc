<template>
<div>
  <di-markdown :content="mds.radio" id="md-intro"></di-markdown>
</div>
</template>

<script>
import * as Com from '@/common'
import * as Utils from 'build/plugs/utils'
import '@/static/css/diui/radio.scss'

export default{
  name: 'css-base'
  ,data(){
    return {
      mds:{
        radio:require('./../../../mds/css/radio.md')
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