/* 全局有三个参数 
 * # ___PROJECT 项目名称
 * # ___ENV 环境模式 development || production
 * # ___VERSION 版本号（不带v）
*/

//去掉提示 可取消
Vue.config.productionTip = false;

//获取数据插件 like ajax
import VueResource from 'modules/vue-resource'
Vue.use(VueResource);

//语言包
import Lang from 'build/plugs/lang'
Vue.filter('lang', Lang.filter);
export {Lang};

//过滤器
import Filters from 'build/filters'
Vue.use(Filters);

//控制台输出辅助信息
if(___ENV == 'development' ){
  setTimeout(()=>{

    console.log("语言包：",Lang);

  });
}

//全局 Vue 实例 以及 第一层组件实例 app
var vm,dispatch=()=>{},commit=()=>{};
const initVue = (_vm)=>{
	vm = _vm;
}; export {vm};

//配置入口
export const set = ({vm})=>{
	if(vm){
		initVue(vm);
	}
}

//# loading
export const show = (text)=>{
  window.$loading && window.$loading.show(text);
}
export const hide = (timer=.2,waitCount=false)=>{
	window.$loading && window.$loading.hide(timer,waitCount);
}

//# 返回首页
export const backIndex = ()=>{
  if(!vm){return;}
  vm.$router.push({path:'/'});
}