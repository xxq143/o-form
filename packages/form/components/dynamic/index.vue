<template>
  <div class="item-inner">
    <el-form ref="dynamicFormRef" :model="selfFormData">
      <el-row
        :gutter="20"
        style="padding-bottom: 20px"
        v-for="(item, index) in selfFormData"
        :key="index"
      >
        <el-col :span="10">
          <el-form-item
            :prop="`${index}.label`"
            :rules="{ required: true, message: '请输入', trigger: 'blur' }"
          >
            <el-input
              v-model="item.label"
              placeholder="label"
              v-bind="attrs"
              @input="updateModelValue"
              @change="onChange"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item
            :prop="`${index}.value`"
            :rules="{ required: true, message: '请输入', trigger: 'blur' }"
          >
            <el-input
              v-model="item.value"
              placeholder="value"
              v-bind="attrs"
              @input="updateModelValue"
              @change="onChange"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button link @click="addItem">add</el-button>
          <el-button link @click="removeItem(index)" :disabled="selfFormData.length === 1">remove</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRaw, watch } from "vue";
import utils from "pkg/utils";
import { cloneDeep } from "lodash";
import type { FormInstance } from "element-plus";

const dynamicFormRef = ref<FormInstance>();
const emits = defineEmits(["update:data"]);
const props = defineProps({
  data: {
    type: Object,
    reuiqre: true,
    default: () => {},
  },
  config: {
    type: Object,
    reuiqre: true,
    default: () => {},
  },
  onChange: {
    type: Function,
    default: () => {},
  },
});

interface SelfFormData {
  label: string;
  value: string;
}
function isSelfFormData(arr: Array<any>): arr is Array<SelfFormData> {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.every((item) => {
    return (
      typeof item === "object" &&
      item !== null &&
      typeof item.label === "string" &&
      typeof item.value === "string"
    );
  });
}
const selfFormData = ref<Array<SelfFormData>>([{ label: "", value: "" }]);
// 透传 element plus 表单属性，todo 后期会对字段进行校验过滤
const attrs = computed(() => {
  return props.config;
});

const modelValue = computed({
  get: () => {
    if (!props.config.prop) {
      throw new Error("缺少属性 prop");
    }
    const path = props.config.prop.split(".");
    if (path) {
      const { ok, data } = utils.tool.getValue(props.data, path);
      if (ok) {
        return data;
      } else {
        return [];
      }
    }
  },
  set: (newVal) => {
    const path = props.config.prop.split(".");
    if (path) {
      const copyData = cloneDeep(toRaw(props.data));
      const { ok, data } = utils.tool.setValue(copyData, path, newVal);
      if (ok) {
        emits("update:data", data);
      } else {
        throw new Error("表单赋值异常");
      }
    }
  },
});

watch(
  () => modelValue.value,
  (newVal) => {
    if (isSelfFormData(newVal as unknown as Array<any>) && newVal.length) {
      const copyData: Array<SelfFormData> = newVal;
      selfFormData.value = copyData;
    } else {
      selfFormData.value = [{ label: "", value: "" }];
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

function updateModelValue() {
  modelValue.value = selfFormData.value;
}
function onChange() {
  props.onChange({
    [props.config.key]: toRaw(selfFormData.value),
    _uid: props.config._uid,
    _prop: props.config.prop,
  });
}
function addItem() {
  dynamicFormRef.value?.validate((valid) => {
    if (valid) {
      const row: SelfFormData = { label: "", value: "" };
      selfFormData.value.push(row);
    }
  });
}
function removeItem(index) {
  selfFormData.value.splice(index, 1);
}
</script>

<style scoped lang="less">
.item-inner {
  width: 100%;
}
</style>
