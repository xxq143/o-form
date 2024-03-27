<template>
  <div class="item-inner">
    <el-switch v-model="modelValue" v-bind="attrs" @change="onChange" />
  </div>
</template>

<script setup>
import { computed, toRaw } from "vue";
import utils from "pkg/form/utils";
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
});

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
