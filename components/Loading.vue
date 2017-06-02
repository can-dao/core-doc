<template>
  <div class="loading-box" v-if="isShow" >
    <img :src="logo" />
  </div>
</template>

<script>

var loadTimer,loadCount=0;
export default {
  name: 'loading'
  ,props:{

  }
  ,data(){
    
    return {
      isShow:true
      ,logo:require("./../static/images/loading.gif")
    }

  }
  ,created(){
    
    this.show();
  }
  ,methods:{

    show(){
      loadTimer && clearTimeout(loadTimer);
      loadCount++;
      this.isShow = true;

    }

    ,hide(timer=.2,waitCount=false){
      loadTimer && clearTimeout(loadTimer);
      loadCount--;
      if(!waitCount || loadCount<0){loadCount = 0;}
      
      if(loadCount==0){
        loadTimer = setTimeout(()=>{
          this.isShow = false;
        },timer*1000);
      }

    }
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
.loading-box{
  position:fixed;z-index:999;
  top:0;left:0;right:0;bottom:0;
  text-align:center;
  background-color:rgba(255,255,255,1/*.5*/)
}
.loading-box > img{
  position:absolute;
  width:120px;height:90px;
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  width:120px;height:90px;
}

</style>