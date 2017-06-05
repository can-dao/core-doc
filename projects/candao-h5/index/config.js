/* 全局有三个参数 
 * # ___PROJECT 项目名称
 * # ___ENV 环境模式 development || production
 * # ___VERSION 版本号（不带v）
 * 建议项目内只在本文件([project]/config.js)上直接使用，其他的项目模块与组件等用到则使用 set 的方法传入配置
 */

//样式配置
import './config.style'

//markdown
import * as markdown from 'build/components/Markdown.vue'
Vue.component("di-markdown",markdown);

//配置／通用函数库
import * as Utils from 'build/plugs/utils'
Vue.prototype.$Utils = Utils;
import * as Com from '@/common'
Vue.prototype.$Com = Com;

//语言包 与项目级语言包合并
import LangLib from './lib.lang'
import LangProjectLib from './../lib.project.lang'
Com.Lang.set({langLib:{...LangProjectLib,...LangLib},keyLang:true});

//主页面组件
import App from './App.vue'

//即插即用插件
import Loading from '@/plugs/loading'

//默认路由配置
import _Router from './router'

//控制台输出辅助信息
if(___ENV == 'development' ){
  setTimeout(()=>{

    console.log("通用库：",Com);
    console.log("工具库：",Utils);

  });

	//开发阶段可以把这个参数给暴露出去 便于调试
	//window.Com = Com;

}

var vm,Router;
const initVm = ()=>{


  Router = new VueRouter(_Router);
  Router.beforeEach(function(to, from, next) {
    if(to.path === '/dir'){
      next(false);
      Router.push("/dir/all");
    }else if(to.path === '/pages'){
      next(false);
      Router.push("/pages/index");
    }else{
      next(true);
    }
  });
  vm = new Vue({
    template:"<App/>"
    ,render: h => h(App)
    ,router:Router
  }).$mount('#app');

  

  //Vue跟Vue实例（即此处的vm）是完全不同的，
  //所以不得不再此处将 vm 传入
  Com.set({vm});

}

//init key & get config
initVm();