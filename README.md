# vue3 element-plus typescript

### 开发阶段，切勿使用

### Do not use during development stage


> 基本用法：
- 确保项目是 vue3 框架并安装和注册了 element-plus
- 在 main.js 中引入组件及样式

```javascript
import oForm from "o-form";
import "o-form/dist/index.csss";

const app = createApp(App);
app.use(oForm);
```

- 组件内使用

```javascript
<template>
    <OForm
        ref="formRef"
        v-model:data="state.data"
        :config="state.config"
    ></OForm>
</template>

<script>
    import {ref} from 'vue'
    import { OForm, utils, types } from "pkg/index";
    const formRef = ref(HTMLElement)

    function submit() {
        // 提交方法 Promise
        formRef.value.submit().then(data => {
            // 校验成功 data 表单数据
        }).catch(err => {
            // 校验失败 err 失败项集合
        })
    }
</script>
```
