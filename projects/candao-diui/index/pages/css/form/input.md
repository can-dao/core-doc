#  input
input
``` html
<input type="text" class="di-input" value="Hi,Man" />
```
正常
*<input type="text" class="di-input" value="Hi,Man" placeholder="请输入内容" />*

选中
*<input type="text" class="di-input di-input__hover" value="Hi,Man" placeholder="请输入内容" readonly="true" />*

点击
*<input type="text" class="di-input di-input__focus" value="Hi,Man" placeholder="请输入内容" readonly="true" />*

## 禁用状态  
在dom里添加disabled属性
``` html
<input type="text" class="di-input" value="Hi,Man" placeholder="请输入内容" disabled />
```
*<input type="text" class="di-input" value="Hi,Man" placeholder="请输入内容" disabled />*

## 带icon的输入框
带有图标标记输入类型
``` html
需要在元素上设置width: $width, background-position: $width-24
<input type="text" class="di-input di-input__search" style="width: 200px; background-position: 176px;" value="" placeholder="请输入内容" />
```
*<input type="text" class="di-input di-input__search" style="width: 200px;background-position: 176px;" value="" placeholder="请输入内容" />*

## 自定义模板
可自定义输入建议的显示
``` html
需要在元素上设置width: $width, background-position: $width-24
<input type="text" class="di-input di-input__edit" style="width: 200px; background-position: 176px;" value="" placeholder="请输入内容" />
```
*<input type="text" class="di-input di-input__edit" style="width: 200px;background-position: 176px;" value="" placeholder="请输入内容" />*


## 文本域
用于输入多行文本信息。若需禁止输入文本则需添加属性 disabled
``` html
<textarea class="di-textarea" placeholder="请输入内容"></textarea>
```
*<textarea class="di-textarea" placeholder="请输入内容"></textarea>*

## 尺寸  
尺寸分别为大(*.di-input__large*), 正常(*.di-input*), 小(*.di-input__small*)

```html
<input type="text" class="di-input di-input__large" value="Hi,Man" placeholder="请输入内容" />
<input type="text" class="di-input" value="Hi,Man" placeholder="请输入内容" />
<input type="text" class="di-input di-input__small" value="Hi,Man" placeholder="请输入内容" />
```
<div class="di-input-size__show">
	<input type="text" class="di-input di-input__large" value="Hi,Man" placeholder="请输入内容" />
	<input type="text" class="di-input" value="Hi,Man" placeholder="请输入内容" />
	<input type="text" class="di-input di-input__small" value="Hi,Man" placeholder="请输入内容" />
</div>


## 复合型输入框
  
添加后置元素
<div class="di-input-mixin">
	<input type="text" class="di-input" value="Hi,Man" placeholder="请输入内容" />
	<span class="di-input-mixin__dotcom"></span>
</div>
```html
<div class="di-input-mixin">
	<input type="text" class="di-input" value="Hi,Man" placeholder="请输入内容" />
	<span class="di-input-mixin__dotcom"></span>
</div>
```
  
添加前置元素
<div class="di-input-mixin">
	<span class="di-input-mixin__select">
		<select class="di-select">
			<option value="0" selected>请选择</option>
			<option value="0">广州市</option>
			<option value="0">北京市</option>
		</select>
	</span>
	<input type="text" class="di-input" value="Hi,Man" placeholder="请输入内容" />
	<span class="di-input-mixin__search"></span>
</div>
```html
<div class="di-input-mixin">
	<span class="di-input-mixin__select">
		<select class="di-select">
			<option value="0" selected>请选择</option>
			<option value="0">广州市</option>
			<option value="0">北京市</option>
		</select>
	</span>
	<input type="text" class="di-input" value="Hi,Man" placeholder="请输入内容" />
	<span class="di-input-mixin__search"></span>
</div>
```