<template>
  <div class="item-inner">
    <div v-if="props.config.useIndeterminate">
      <el-row>
        <el-col>
          <el-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            border
            @change="handleCheckAllChange"
            >全选</el-checkbox
          >
        </el-col>
      </el-row>
      <el-checkbox-group
        v-model="modelValue"
        v-bind="attrs"
        @change="handleCheckedChange"
      >
        <el-checkbox
          v-for="option in options"
          :key="option.value"
          :label="option.value"
          v-bind="option"
          >{{ option.label }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
    <div v-else>
      <el-checkbox-group v-model="modelValue" v-bind="attrs" @change="onChange">
        <el-checkbox
          v-for="option of options"
          :key="option.value"
          :label="option.value"
          v-bind="option"
          >{{ option.label }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
    <!-- todo 暂时不做单个勾选操作 -->
  </div>
</template>

<script setup>
import { ref, computed, toRaw } from "vue";
import utils from "pkg/utils";
import { cloneDeep } from "lodash";
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
  dictionary: {
    type: Object,
    default: () => {},
  },
});

const checkAll = ref(false); // 是否全选
const isIndeterminate = ref(true); // 非（全选，非全选）
// 透传 element plus 表单属性，todo 后期会对字段进行校验过滤
const attrs = computed(() => {
  return props.config;
});

const options = computed(() => {
  if (
    props.config.dictCode &&
    props.dictionary &&
    props.dictionary[props.config.dictCode]
  ) {
    return props.dictionary[props.config.dictCode];
  }
  return props.config.options || [];
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
        return null;
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

// 全选  非全选 事件
function handleCheckAllChange(isCheckAll) {
  modelValue.value = isCheckAll ? options.value.map((item) => item.value) : [];
  isIndeterminate.value = false; // 状态为 全选  非全选
}

// 半选事件
function handleCheckedChange(value) {
  const checkedCount = value.length;
  checkAll.value = checkedCount === options.value.length;
  isIndeterminate.value =
    checkedCount > 0 && checkedCount < options.value.length;
  onChange(value);
}

function onChange(e) {
  props.onChange({
    [props.config.key]: e,
    _uid: props.config._uid,
    _prop: props.config.prop,
  });
}
</script>

<style scoped lang="less">
.item-inner {
  width: 100%;
}
</style>
