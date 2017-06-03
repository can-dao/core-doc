<template>
<div>
  <di-markdown :content="mds.select" id="md-intro"></di-markdown>
</div>
</template>

<script>
import * as Com from '@/common'
import * as Utils from 'build/plugs/utils'

import '@/static/css/diui/select.scss'

export default{
  name: 'css-base'
  ,data(){
    return {
      mds:{
        select:require('./../../../mds/css/select.md')
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