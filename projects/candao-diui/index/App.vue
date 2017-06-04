<template>
<div class="app">
  <div id="header">
    <div class="logo" @click="goHome"><span class="title">DIUI 中文网</span></div>
    <div class="nav">
      <ul>
        <li><router-link to="/css">通用样式</router-link></li>
        <li><router-link to="/components">扩展组件</router-link></li>
      </ul>

    </div>
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
    goHome(){
      this.$router.push("/")
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

</style>