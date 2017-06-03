##  Checkbox 多选框
一组备选项中进行多选
### 基础语法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
``` html
<label class="di-checkbox">
	<input type="checkbox" checked>
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">备选项</span>
</label>
```
*<label class="di-checkbox">
	<input type="checkbox" checked>
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">备选项</span>
</label>*
### 禁用状态
多选框不可用状态。
``` html
<label class="di-checkbox">
	<input type="checkbox" disabled>
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">备选项1</span>
</label>
<label class="di-checkbox">
	<input type="checkbox" checked disabled>
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">备选项</span>
</label>
```
*<label class="di-checkbox">
	<input type="checkbox" disabled>
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">备选项1</span>
</label>*
*<label class="di-checkbox">
	<input type="checkbox" checked disabled>
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">备选项</span>
</label>*
### 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
``` html
<div class="di-checkbox-group">
	<label class="di-checkbox">
		<input type="checkbox" checked>
		<i class="di-checkbox-style"></i>
		<span class="di-checkbox-text">复选框A</span>
	</label>
	<label class="di-checkbox">
		<input type="checkbox">
		<i class="di-checkbox-style"></i>
		<span class="di-checkbox-text">复选框B</span>
	</label>
	<label class="di-checkbox">
		<input type="checkbox">
		<i class="di-checkbox-style"></i>
		<span class="di-checkbox-text">复选框C</span>
	</label>
	<label class="di-checkbox">
		<input type="checkbox" disabled>
		<i class="di-checkbox-style"></i>
		<span class="di-checkbox-text">禁用</span>
	</label>
	<label class="di-checkbox">
		<input type="checkbox" checked disabled>
		<i class="di-checkbox-style"></i>
		<span class="di-checkbox-text">选中且禁用</span>
	</label>
</div>
```
*<label class="di-checkbox">
	<input type="checkbox" checked>
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">复选框A</span>
</label>*
*<label class="di-checkbox">
	<input type="checkbox">
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">复选框B</span>
</label>*
*<label class="di-checkbox">
	<input type="checkbox">
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">复选框C</span>
</label>*
*<label class="di-checkbox">
	<input type="checkbox" disabled>
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">禁用</span>
</label>*
*<label class="di-checkbox">
	<input type="checkbox" checked disabled>
	<i class="di-checkbox-style"></i>
	<span class="di-checkbox-text">选中且禁用</span>
</label>*
### indeterminate 状态
 indeterminate  属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果
 ```html
<div>
	 <label class="di-checkbox">
		<input type="checkbox" checked>
		<i class="di-checkbox-style is-select-all"></i>
		<span class="di-checkbox-text">全选</span>
	</label>
	<div class="di-checkbox-group">
		<label class="di-checkbox">
			<input type="checkbox">
			<i class="di-checkbox-style"></i>
			<span class="di-checkbox-text">选中</span>
		</label>
		<label class="di-checkbox">
			<input type="checkbox" checked>
			<i class="di-checkbox-style"></i>
			<span class="di-checkbox-text">北京</span>
		</label>
		<label class="di-checkbox">
			<input type="checkbox" checked>
			<i class="di-checkbox-style"></i>
			<span class="di-checkbox-text">广州</span>
		</label>
		<label class="di-checkbox">
			<input type="checkbox" checked>
			<i class="di-checkbox-style"></i>
			<span class="di-checkbox-text">深圳</span>
		</label>
	</div>
</div>
 ```
 <div>
	 <label class="di-checkbox">
		<input type="checkbox" checked>
		<i class="di-checkbox-style is-select-all"></i>
		<span class="di-checkbox-text">全选</span>
	</label>
	<div class="di-checkbox-group">
		<label class="di-checkbox">
			<input type="checkbox">
			<i class="di-checkbox-style"></i>
			<span class="di-checkbox-text">选中</span>
		</label>
		<label class="di-checkbox">
			<input type="checkbox" checked>
			<i class="di-checkbox-style"></i>
			<span class="di-checkbox-text">北京</span>
		</label>
		<label class="di-checkbox">
			<input type="checkbox" checked>
			<i class="di-checkbox-style"></i>
			<span class="di-checkbox-text">广州</span>
		</label>
		<label class="di-checkbox">
			<input type="checkbox" checked>
			<i class="di-checkbox-style"></i>
			<span class="di-checkbox-text">深圳</span>
		</label>
	</div>
</div>
