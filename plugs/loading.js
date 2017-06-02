import Loading from '@/components/Loading.vue'
;(function () {
	
	var loading = {},Vue,$loading={};
	loading.install = (_Vue) => {
		
		Vue = _Vue;
		var dom_loading = document.createElement('div');
		document.body.appendChild(dom_loading);
		var newVm = new Vue({
		  template:"<Loading/>"
		  ,render: h => h(Loading)
		  
		}).$mount(dom_loading);

		$loading = newVm.$children[0];
		Vue.prototype.$loading = $loading;
		window.$loading = $loading;
	}


	if (typeof exports == "object") {
		module.exports = loading
	} else if (typeof define == "function" && define.amd) {
		define([], function(){ return loading })
	}

	if(window.Vue) { window.Vue.use(loading)}


	

})();