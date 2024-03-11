<template>
  <div class="item-content">
    <el-form-item
      :prop="props.config.prop"
      :label="props.config.label"
      :label-width="props.config.labelWidth"
      :rules="props.config.rules"
    >
      <Cascader
        v-if="getType(props.config) === 'cascader'"
        :config="props.config"
        :dictionary="props.dictionary"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <Checkbox
        v-if="getType(props.config) === 'checkbox'"
        :config="props.config"
        :dictionary="props.dictionary"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <Color
        v-if="getType(props.config) === 'color'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <DatePicker
        v-if="getType(props.config) === 'date-picker'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <DateTimePicker
        v-if="getType(props.config) === 'date-time-picker'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <Dynamic
        v-if="getType(props.config) === 'dynamic'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      ></Dynamic>
      <Input
        v-if="getType(props.config) === 'input'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <Number
        v-if="getType(props.config) === 'number'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <Radio
        v-if="getType(props.config) === 'radio'"
        :config="props.config"
        :dictionary="props.dictionary"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <Rate
        v-if="getType(props.config) === 'rate'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <Select
        v-if="getType(props.config) === 'select'"
        :config="props.config"
        :dictionary="props.dictionary"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <Slider
        v-if="getType(props.config) === 'slider'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <Switch
        v-if="getType(props.config) === 'switch'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <TimePicker
        v-if="getType(props.config) === 'time-picker'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />
      <TimeSelect
        v-if="getType(props.config) === 'time-select'"
        :config="props.config"
        v-model:data="modelValue"
        :on-change="props.onChange"
      />

      <el-button-group v-if="props.isTest">
        <el-button
          link
          @click.stop="eventHandler(props.config, 'edit')"
          type="success"
          >编辑</el-button
        >
        <el-button
          link
          @click.stop="eventHandler(props.config, 'remove')"
          type="danger"
          >删除</el-button
        >
        <el-button
          link
          @click.stop="eventHandler(props.config, ' copy')"
          type="primary"
          >复制</el-button
        >
      </el-button-group>
      <!-- <Upload v-if="getType(props.config) === 'upload'" :config="props.config" v-model:data="modelValue" /> -->
    </el-form-item>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Cascader from "../cascader/index.vue";
import Checkbox from "../checkbox/index.vue";
import Color from "../color/index.vue";
import DatePicker from "../date-picker/index.vue";
import DateTimePicker from "../date-time-picker/index.vue";
import Dynamic from "../dynamic/index.vue";
import Input from "../input/index.vue";
import Number from "../number/index.vue";
import Radio from "../radio/index.vue";
import Rate from "../rate/index.vue";
import Select from "../select/index.vue";
import Slider from "../slider/index.vue";
import Switch from "../switch/index.vue";
import TimePicker from "../time-picker/index.vue";
import TimeSelect from "../time-select/index.vue";
// import Upload from '../upload/index.vue'

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
  eventHandler: {
    type: Function,
    default: () => {},
  },
  isTest: {
    type: Boolean,
    default: false,
  },
  dictionary: {
    type: Object,
    default: () => {}
  }
});

const modelValue = computed({
  get: () => {
    return props.data;
  },
  set: (newVal) => {
    emits("update:data", newVal);
  },
});

function getType(config) {
  return config.oType || "";
}

function eventHandler(config, type) {
  props.eventHandler(config, type);
}
</script>

<style scoped lang="less">
.item-content {
  width: 100%;
}
</style>
