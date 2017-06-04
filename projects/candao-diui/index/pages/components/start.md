#  起步
#### 引入 样式与脚本

```html
<!-- DIUI 基础样式包 -->
<link href="//cdn.bootcss.com/diui/1.0.0/css/diui-normal.min.css" rel="stylesheet">

<!-- DIUI 组件扩展样式包 -->
<link href="//cdn.bootcss.com/diui/1.0.0/css/diui-extra-components.min.css" rel="stylesheet">

<!-- 基于 Vue.js -->
<script src="//cdn.bootcss.com/vue/2.3.3/vue.min.js"></script>

<!-- DIUI 组件 -->
<script src="//cdn.bootcss.com/diui/1.0.0/js/diui-extra-components.min.js"></script>
```

#### 定义VUE挂起的容器

```html
<div id="app"></app>
```

#### 挂起 #app , 并定义组件使用到的数据 

```javascript
var app = new Vue({
  el: '#app',
  data: {
    groupOptions: [
		 {type:'select',options:[{name:'广州市'},{name:'广州市'},{name:'广州市'}],width:200}
		,{type:'input',placeholder:'请输入内容'}
		,{type:'button',width:60,icon:'search',fn:function(values){
				console.log(values); // ['广州市','文本内容']
			}
		}
	]
  }
})
```

#### Template 开始使用组件

```html
<di-group :options="groupOptions"></di-group>

```

#### 最终效果

![](/assets/images/da216555.example.png)

「UI组件」致力于 *用尽可能少的代码实现尽可能多的功能。*

