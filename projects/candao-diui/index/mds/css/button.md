#  button
<h3>基础的按钮用法</h3>
``` html
<button type="button" class="btn btn-link">线框按钮</button>
<button type="button" class="btn btn-default">默认按钮</button>
<button type="button" class="btn btn-font">文字按钮</button>
```

<button type="button" class="btn btn-link">线框按钮</button>
<button type="button" class="btn btn-default">默认按钮</button>
<button type="button" class="btn btn-font">文字按钮</button>

<h3>禁用状态</h3>
按钮不可用状态
```html
<button type="button" class="btn btn-link" disabled>线框按钮</button>
<button type="button" class="btn btn-default" disabled>默认按钮</button>
<button type="button" class="btn btn-font" disabled>文字按钮</button>
<button type="button" class="btn btn-other" disabled>其他按钮</button>
```
<button type="button" class="btn btn-link" disabled>线框按钮</button>
<button type="button" class="btn btn-default" disabled>默认按钮</button>
<button type="button" class="btn btn-font" disabled>文字按钮</button>
<button type="button" class="btn btn-other" disabled>其他按钮</button>



<h3>有颜色倾向</h3>
不同颜色倾向代表不同情况
``` html
<button type="button" class="btn btn-cancel">取消按钮</button>
<button type="button" class="btn btn-set">设置按钮</button>
<button type="button" class="btn btn-warning">警告按钮</button>
<button type="button" class="btn btn-danger">危险按钮</button>
<button type="button" class="btn btn-info">信息按钮</button>
<button type="button" class="btn btn-other">其他按钮</button>
```
<span>默认显示</span>
<div>
	<span>正常</span>
	<button type="button" class="btn btn-cancel">取消按钮</button>
	<button type="button" class="btn btn-set">设置按钮</button>
	<button type="button" class="btn btn-warning">警告按钮</button>
	<button type="button" class="btn btn-danger">危险按钮</button>
	<button type="button" class="btn btn-info">信息按钮</button>
	<button type="button" class="btn btn-other">其他按钮</button>
</div>
<div>
	<span>选中</span>
	<button type="button" class="btn btn-cancel">取消按钮</button>
	<button type="button" class="btn btn-set">设置按钮</button>
	<button type="button" class="btn btn-warning">警告按钮</button>
	<button type="button" class="btn btn-danger">危险按钮</button>
	<button type="button" class="btn btn-info">信息按钮</button>
	<button type="button" class="btn btn-other">其他按钮</button>
</div>
<div>
	<span>点击</span>
	<button type="button" class="btn btn-cancel">取消按钮</button>
	<button type="button" class="btn btn-set">设置按钮</button>
	<button type="button" class="btn btn-warning">警告按钮</button>
	<button type="button" class="btn btn-danger">危险按钮</button>
	<button type="button" class="btn btn-info">信息按钮</button>
	<button type="button" class="btn btn-other">其他按钮</button>
</div>

<span>hour显示</span>

<div>
	<span>正常</span>
	<button type="button" class="btn btn-cancel show">取消按钮</button>
	<button type="button" class="btn btn-set show">设置按钮</button>
	<button type="button" class="btn btn-warning show">警告按钮</button>
	<button type="button" class="btn btn-danger show">危险按钮</button>
	<button type="button" class="btn btn-info show">信息按钮</button>
	<button type="button" class="btn btn-other show">其他按钮</button>
</div>
<div>
	<span>选中</span>
	<button type="button" class="btn btn-cancel show">取消按钮</button>
	<button type="button" class="btn btn-set show">设置按钮</button>
	<button type="button" class="btn btn-warning show">警告按钮</button>
	<button type="button" class="btn btn-danger show">危险按钮</button>
	<button type="button" class="btn btn-info show">信息按钮</button>
	<button type="button" class="btn btn-other show">其他按钮</button>
</div>
<div>
	<span>点击</span>
	<button type="button" class="btn btn-cancel show">取消按钮</button>
	<button type="button" class="btn btn-set show">设置按钮</button>
	<button type="button" class="btn btn-warning show">警告按钮</button>
	<button type="button" class="btn btn-danger show">危险按钮</button>
	<button type="button" class="btn btn-info show">信息按钮</button>
	<button type="button" class="btn btn-other show">其他按钮</button>
</div>


<h3>图标按钮</h3>
带图标的按钮可以增强辨识度（有图标）或解释空间（无文字
```html
<button type="button" class="btn btn-default icon ion-star"></button>
<button type="button" class="btn btn-default icon ion-edit"></button>
<button type="button" class="btn btn-default icon ion-trash-a"></button>
<button type="button" class="btn btn-default icon ion-search">搜索</button>
<button type="button" class="btn btn-default icon ion-upload icon-right">上传</button>
```
<button type="button" class="btn btn-default icon ion-star"></button>
<button type="button" class="btn btn-default icon ion-edit"></button>
<button type="button" class="btn btn-default icon ion-trash-a"></button>
<button type="button" class="btn btn-default icon ion-search">搜索</button>
<button type="button" class="btn btn-default icon ion-upload icon-right">上传</button>


<h3>按钮组</h3>
以按钮组方式出现，一般用于多项类
```html
<div class="btn-group">
	<button type="button" class="btn btn-default icon ion-star"></button>
	<button type="button" class="btn btn-default icon ion-edit"></button>
	<button type="button" class="btn btn-default icon ion-trash-a"></button>
</div>
<div class="btn-group">
	<button type="button" class="btn btn-default icon ion-chevron-left">上一页</button>
	<button type="button" class="btn btn-default icon ion-chevron-right">下一页</button>
</div>
```
<div class="btn-group">
	<button type="button" class="btn btn-default icon ion-star"></button><button type="button" class="btn btn-default icon ion-edit"></button><button type="button" class="btn btn-default icon ion-trash-a"></button>
</div>
<div class="btn-group">
	<button type="button" class="btn btn-default icon ion-chevron-left">上一页</button><button type="button" class="btn btn-default icon ion-chevron-right">下一页</button>
</div>

<h3>不同尺寸</h3>
Button组件提供除了默认以外的三种尺寸，可以在不同场景选择合适的按钮尺寸
```html
<button type="button" class="btn btn-default btn-big">big</button>
<button type="button" class="btn btn-default">default</button>
<button type="button" class="btn btn-default btn-small">small</button>
<button type="button" class="btn btn-default btn-wee">wee</button>
```
<button type="button" class="btn btn-default btn-big">big</button>
<button type="button" class="btn btn-default">default</button>
<button type="button" class="btn btn-default btn-small">small</button>
<button type="button" class="btn btn-default btn-wee">wee</button>
