<template>
  <div class="container">
    <el-config-provider :locale="locale">
      <el-form :model="modelValue" ref="guitar" :label-position="labelPosition">
        <el-row
          v-for="(block, blockIndex) of props.config"
          :key="blockIndex"
          :gutter="block.gutter"
        >
          <el-col :span="24">
            <div class="title-content">
              <slot :name="block.name">{{ block.title }}</slot>
            </div>
          </el-col>
          <el-col
            v-bind="getColProp(child)"
            v-for="child of block.children"
            :key="child.key"
          >
            <div v-if="child.type === 'slot'" class="slot-item-content">
              <slot
                :name="child.name"
                :info="{ data: props.data, config: child }"
                >slot</slot
              >
            </div>
            <FormItem
              v-else
              :config="child"
              :is-test="props.isTest"
              v-model:data="modelValue"
              :onChange="props.onChange"
              :event-handler="props.eventHandler"
            ></FormItem>
          </el-col>
        </el-row>
      </el-form>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw, computed } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
// 如果只想导入css变量
import "element-plus/theme-chalk/dark/css-vars.css";
import { useDark } from "@vueuse/core";
import FormItem from "./components/form-item/index.vue";
import utils from "pkg/utils/index";
import { cloneDeep } from "lodash";

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));

const isDark = useDark();
isDark.value = true;
const emits = defineEmits(["update:data"]);
const props = defineProps({
  data: {
    type: Object,
    require: true,
    default: () => {},
  },
  config: {
    type: Array,
    require: true,
    default: () => [],
  },
  root: {
    type: Object,
    default: () => {},
  },
  onChange: {
    type: Function,
    default: () => {},
  },
  eventHandler: {
    type: Function,
    default: () => {},
  },
  isTest: {
    type: Boolean,
    default: false,
  },
  locale: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const guitar = ref(HTMLElement);

const modelValue = computed({
  get: () => {
    return props.data;
  },
  set: (newVal) => {
    emits("update:data", newVal);
  },
});
const labelPosition = computed(() => {
  let position = (props.root && props.root.labelPosition) || "left";
  return position;
});

function getColProp(data) {
  let list = ["span"];
  let result = {};
  list.forEach((key) => {
    if (utils.tool.hasKey(data, key)) {
      result[key] = data[key];
    }
  });
  return result;
}

function submit():Promise {
  return new Promise((resolve, reject) => {
    guitar.value.validate((valid, field) => {
      if (valid) {
        resolve(cloneDeep(toRaw(props.data)));
      } else {
        reject(field);
      }
    });
  });
}

defineExpose({
  submit,
});
</script>

<style scoped lang="less">
.container {
  .title-content {
    text-align: left;
    padding: 10px 0;
    margin-bottom: 10px;
    border: 1px dashed rgba(255, 255, 255, 0.2);
  }

  .slot-item-content {
    word-break: break-all;
  }
}
</style>
