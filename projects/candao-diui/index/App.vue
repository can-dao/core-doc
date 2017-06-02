<template>
<div class="app">
  <div id="header">
    <div class="logo"><img :src="logo" /><span class="title">DIUI 中文网</span></div>
  </div>
  <div id="body">
    <div class="sidebar">
      <div class="version">
        <select>
          <option>0.1.0</option>
        </select>
      </div>

      <div class="part" v-for="(sidebar,index) in sidebars" v-bind:class="'part'+index">
        <h3>{{sidebar.name}}</h3>
        <ul v-if="sidebar.children">
          <li v-for="(child,index2) in sidebar.children">
            <!-- -->
            <router-link v-if="!child.children || child.children.length==0" :to="child.path">{{child.name}}</router-link>
            <h4 v-else>{{child.name}}</h4>

            <ul v-if="child.children">
              <li v-for="(lastChild,index3) in child.children">
                <router-link :to="lastChild.path">{{lastChild.name}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div id="main" class="main">
      <transition name="fade"><keep-alive><router-view></router-view></keep-alive></transition>
    </div>
  </div>
  
</div>
</template>

<script>
import * as Com from '@/common' 
export default{
	name: 'App'
  ,data(){
    
    return {
      logo:require("@/static/images/logo.png")
      ,sidebars:[
        {name:'介绍',children:[
          {name:'DIUI 是什么?',path:'/intro/index'}
        ]}
        ,{name:'全局基础样式',children:[
          {name:'起步',path:'/css/start'}
          ,{name:'基础',path:'/css/base',children:[
            {name:'色彩',path:'/css/base/color'}
          ]}
          ,{name:'表单',path:'/css/form',children:[
            {name:'input',path:'/css/form/input'}
            ,{name:'button',path:'/css/form/button'}
            ,{name:'radio',path:'/css/form/radio'}
            ,{name:'checkbox',path:'/css/form/checkbox'}
            ,{name:'select',path:'/css/form/select'}
          ]}
        ]}
        ,{name:'基于Vue2组件',children:[
          {name:'起步',path:'/components/start'}
          ,{name:'ionicons字体图标',path:'/components/ionicons'}
          ,{name:'下拉菜单',path:'/components/dropdown'}
          ,{name:'按钮组',path:'/components/gbutton'}
        ]}
      ]
    }
  }
  ,created(){
    
  }
  ,mounted () {
    
  }
  ,methods:{
    goto(id,$event){
      var targtet = document.getElementById('md-'+id);
      if(targtet){
        var main = document.getElementById("main");
        main.scrollTop = targtet.offsetTop;
        this.hashActive($event);
      }
    }
    ,hashActive($event){

      var liBros = $event.target.parentElement.parentElement.children;
      for(var i =0,l=liBros.length;i<l;i++){
        var liBro = liBros[i];
        for(var j =0,ll=liBro.children.length;j<ll;j++){
          liBro.children[j].classList.value = '';
        }
      }

      $event.target.classList.value = 'active';
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
#header{
  padding:10px 20px;box-shadow: 0 0 1px rgba(0,0,0,0.25);position:fixed;top:0;left:0;right:0;
  background-color:#fafafa;
}
#header .logo {font-family:'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;}
#header .logo img {vertical-align:text-bottom;}
#header .logo span.title{margin-left:10px;text-shadow: 0 1px 0 #fff;font-size:1.2em;font-weight:100;line-height:30px;}

#body{display:flex;}
#body > div{overflow:hidden;overflow-y:auto;position:fixed;top:56px;bottom:0;}

#body .sidebar{width:200px;padding:40px 0 30px 60px;left:0;}
#body .sidebar .part{margin-top:20px;}
#body .sidebar .part ul li{margin-top:5px;}
#body .sidebar .part ul ul{padding-left:10px;margin-top:5px;}
#body .sidebar .part ul a{display:block;line-height:2em;}
#body .sidebar .part ul ul a{line-height:1.5em;}
#body .sidebar .part h3 {line-height:2em;margin-top:1em;}
#body .sidebar .part h4 {color:#798494;font-weight:normal;margin-top:15px;}

#body .main{left:260px;right:0;padding:20px}
a{color:#1b2025;}
a.active,a:hover{color:#5b6cc1;font-weight:bold;}
</style>