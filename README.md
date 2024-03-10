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
    <o-form ref="formRef" v-model:data="state.form" :config="state.config"></o-form>
    <el-button @click="submit">submit</el-button>
</template>

<script>
    import {ref, reactive} from 'vue'

    const formRef = ref(HTMLElement)
    const state = reactive({
        data: {},
        config: [{
            label: '',
            children:[{
                oType: 'input',
                key: 'test',
                prop: 'test',
                span: 6,
                label: 'testLabel',
                rules: {required: true, message: '请输入', trigger: 'blur'}
            }]
        }]
    })

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
