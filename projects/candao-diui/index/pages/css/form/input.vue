<template>
<div>
  <di-markdown :content="mds.input" id="md-intro"></di-markdown>
</div>
</template>

<script>
import * as Com from '@/common'
import * as Utils from 'build/plugs/utils'

import '@/static/css/diui/input.scss'

export default{
  name: 'css-base'
  ,data(){
    return {
      mds:{
        input:require('./../../../mds/css/input.md')
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