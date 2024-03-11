<template>
  <div class="container">
    <header>创建表单 {{ state.currentUid }}</header>
    <section>
      <aside>
        <div class="box">
          <el-scrollbar wrap-style="padding: 20px;">
            <div v-for="item in dataList">
              <el-text type="danger">{{ item.key }}: </el-text>
              <el-text>{{ item.value }}</el-text>
            </div>
          </el-scrollbar>
        </div>
      </aside>
      <main>
        <div class="box">
          <el-scrollbar wrap-style="padding: 20px;">
            <o-form
              ref="formRef"
              v-model:data="state.data"
              :config="state.config"
              :isTest="state.isTest"
              :eventHandler="eventHandler"
              :on-change="onChange"
            ></o-form>
            <div style="padding: 10px"></div>
          </el-scrollbar>
        </div>
      </main>
    </section>
    <footer>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-select v-model="state.formType" @change="addItem">
            <el-option
              v-for="option in state.typeOpts"
              :key="option.value as string"
              :label="option.label"
              :value="option.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-button @click="addItem">add</el-button>
          <el-button @click="submit">控制台查看提交结果</el-button>
          <el-button @click="printJson">控制台查看json配置</el-button>
        </el-col>
      </el-row>
    </footer>
    <el-dialog
      v-model="state.dialog.visible"
      :fullscreen="true"
      :title="state.currentUid"
    >
      <o-form
        v-model:data="state.dialog.data"
        :config="state.dialog.config"
        :on-change="dialogUpdate"
      ></o-form>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup name="CreateForm">
import { OForm, utils, types } from "o-form";
import { cloneDeep } from "lodash";

import { onMounted, reactive, computed, ref } from "vue";

interface State {
  data: types.FormData;
  config: Array<types.Config>;
  formType: string;
  formUid: string;
  updateKey: string;
  updateProp: string;
  isTest: boolean;
  typeOpts: Array<types.Options>;
  currentUid: string;
  dialog: any;
}
const root = new utils.Form();
console.log('root', root)
const formRef = ref<InstanceType<typeof OForm>>();
const state: State = reactive({
  data: {},
  config: [],
  formType: "input",
  formUid: "",
  updateKey: "",
  updateProp: "",
  isTest: false,
  typeOpts: [],
  currentUid: "",
  dialog: {
    visible: false,
    data: {},
    config: [],
  },
});
const dataList = computed(() => {
  let list: Array<Record<string, any>> = [];
  Object.keys(state.data).forEach((key) => {
    list.push({
      key,
      value: state.data[key],
    });
  });
  return list;
});

function addItem() {
  let type: types.FormTypes = state.formType as types.FormTypes;
  if (type) {
    root.addItem(type);
    refresh();
  }
}

function refresh() {
  state.data = cloneDeep(root.form.data);
  state.config = cloneDeep(root.form.config);
  state.isTest = root.isTest;
}

function eventHandler(
  config: types.InsOptions,
  type: "edit" | "remove" | "copy"
) {
  if (type === "remove" && config._uid) {
    root.removeItem(config._uid);
    refresh();
  } else if (type === "edit" && config._uid) {
    const currentIns = root.getFormItemIns(config._uid);

    if (currentIns) {
      const dialogForm = currentIns.getItemConfig();
      state.dialog.data = dialogForm.data;
      state.dialog.config = dialogForm.config;
      state.currentUid = currentIns._uid;
      state.dialog.visible = true;
    }
  }
}

function onChange(data: Record<string, any>): void {
  console.log(data);
  root.updateItemDefaultValue(data._uid, data);
}

function dialogUpdate(data: Record<string, any>): void {
  root.updateItem(state.currentUid, data);
  refresh();
}

function submit() {
  if (formRef.value) {
    formRef.value
      .submit()
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
}

function printJson() {
  console.log(root.getFormConfig().json);
}
function init() {
  state.typeOpts = root.types.map((item) => {
    return {
      label: item,
      value: item,
    };
  });
}
onMounted(() => {
  init();
});
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header,
  footer,
  aside,
  main {
    box-sizing: border-box;
  }
  header,
  footer {
    height: 100px;
    min-height: 100px;
    padding: 20px;
    box-sizing: border-box;
  }
  header {
    height: 50px;
    min-height: 50px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section {
    flex: 1;
    display: flex;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    aside {
      width: 300px;
      min-width: 300px;
      border-right: 1px solid rgba(255, 255, 255, 0.5);
      position: relative;
    }
    main {
      flex: 1;
      position: relative;
    }
  }
  .box {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
  }
}
</style>
