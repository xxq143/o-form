<template>
  <el-scrollbar wrap-style="padding: 20px;">
    <el-card>
      {{ state.data }}
    </el-card>
    <o-form
      ref="formRef"
      v-model:data="state.data"
      :config="state.config"
      :on-change="onChange"
    ></o-form>
  </el-scrollbar>
</template>

<script lang="ts" setup name="Demo">
import { OForm, utils, types } from "o-form";

import { onMounted, reactive, ref } from "vue";

interface State {
  data: types.FormData;
  config: Array<types.Config>;
}
const root = new utils.Form();
const formRef = ref<InstanceType<typeof OForm>>();
const state: State = reactive({
  data: { test: [] },
  config: [
    {
      label: "",
      key: "",
      children: [
        {
          oType: "dynamic",
          key: "test",
          prop: "test",
          label: "test",
          span: 12,
          itemDefaultValue: [],
          defaultCreateData: [{ label: "1", value: "1" }],
        },
      ],
    },
  ],
});

function onChange(data: Record<string, any>): void {
  console.log(data);
  root.updateItemDefaultValue(data._uid, data);
}

// function submit() {
//   if (formRef.value) {
//     formRef.value
//       .submit()
//       .then((res: any) => {
//         console.log(res);
//       })
//       .catch((err: any) => {
//         console.error(err);
//       });
//   }
// }

function init() {}
onMounted(() => {
  init();
});
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
}
</style>
