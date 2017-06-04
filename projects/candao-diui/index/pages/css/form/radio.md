#  Radio单选框
在一组备选项中进行单选

### 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用select选择器

``` html
<label class="di-radio">
  <input type="radio" /> 备选项
</label>
```
<label class="di-radio radio">
  <input type="radio" name="radio_1" />
  备选项
</label>
<label class="di-radio radio">
  <input type="radio" name="radio_1" />
  备选项
</label>

### 禁用状态
单选框不可用的状态

``` html
<label class="di-radio">
  <input type="radio" disabled /> 备选项
</label>
```
<label class="di-radio radio">
  <input type="radio" name="radio_2" disabled />
  备选项
</label>
<label class="di-radio radio">
  <input type="radio" name="radio_2" disabled checked />
  备选项
</label>

### 单选框组
适用于在多个互斥的选项中选择的场景

<label class="di-radio radio">
  <input type="radio" name="radio_3" />
  备选项
</label>
<label class="di-radio radio">
  <input type="radio" name="radio_3" />
  备选项
</label>
<label class="di-radio radio">
  <input type="radio" name="radio_3" />
  备选项
</label>

### 按钮样式
按钮样式的单选组合

``` html
<label class="di-radio-btn">
  <input type="radio" /> 备选项
</label>
```
<label class="di-radio-btn radio_4">
  <input type="radio" name="radio_4" disabled/>
  备选项
</label>
<label class="di-radio-btn radio_4 di-radio-btn-checked">
  <input type="radio" name="radio_4" checked disabled/>
  备选项
</label>
<label class="di-radio-btn radio_4 di-radio-btn-disabled">
  <input type="radio" name="radio_4" disabled/>
  备选项
</label>
