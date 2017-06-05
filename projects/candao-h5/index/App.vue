<template>
<div class="app">
  <div id="header">
    <div class="logo" @click="goHome"><span class="title">H5 v2 Doc</span></div>
    <div class="nav">
      <ul>
        <li><router-link to="/dir">目录结构</router-link></li>
        <li><router-link to="/pages">页面说明</router-link></li>
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
            {name:'H5 v2 是什么？',path:'/intro/index'}
            ,{name:'如何添加一个页面？',path:'/intro/addPage'}
          ]
        }
        ,{name:'目录结构',children:[
          	{name:'全局',path:'/dir/all'}
          ]
        }
        ,{name:'页面说明',path:'/pages',children:[
            {name:'首页',path:'/pages/index'}
            ,{name:'登录页',path:'/pages/login'}
          ]
        }
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