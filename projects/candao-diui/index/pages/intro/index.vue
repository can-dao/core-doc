<template>
<div class="index">
  <di-markdown :content="mds.index" id="md-intro"></di-markdown>
</div>
</template>

<script>
import * as Com from '@/common'
import * as Utils from 'build/plugs/utils'

export default{
  name: 'intro-index'
  ,data(){
    return {
      mds:{
        index:require('./../../mds/intro/index.md')
      }
    }
  }
  ,created(){
    Com.hide();
  }
  ,mounted(){
    hljs.initHighlightingOnLoad();

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