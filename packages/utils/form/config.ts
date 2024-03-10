import { InsOptions } from '../types'
export type PropKeys = 'oType' | 'key' | 'prop' | 'label' | 'span' | 'size' | 'placeholder' | 'disabled' | 'clearable' | 'labelWidth'
export const oType: InsOptions = {
  oType: "select",
  key: "oType",
  label: "表单类型",
  disabled: true,
  span: 24,
  rules: {},
  prop: "oType",
  options: [
    { label: "级联选择器", value: "cascader" },
    { label: "多选框", value: "checkbox" },
    { label: "取色器", value: "color" },
    { label: "日期选择器", value: "date-picker" },
    { label: "日期时间选择器", value: "date-time-picker" },
    { label: "输入框", value: "input" },
    { label: "数字输入框", value: "number" },
    { label: "单选框", value: "radio" },
    { label: "好评", value: "rate" },
    { label: "选择器", value: "select" },
    { label: "滑块", value: "slider" },
    { label: "开关", value: "switch" },
    { label: "时间选择器", value: "time-picker" },
    { label: "时间选择", value: "time-select" },
  ],
};

export const key: InsOptions = {
  oType: "input",
  key: "key",
  label: "键值 key",
  span: 24,
  rules: {},
  prop: "key",
};

export const prop: InsOptions = {
  oType: "input",
  key: "prop",
  label: "对象属性",
  span: 24,
  rules: {},
  prop: "prop",
};

export const label: InsOptions = {
  oType: "input",
  key: "label",
  label: "标签",
  span: 24,
  rules: {},
  prop: "label",
};

export const span: InsOptions = {
  oType: "select",
  key: "span",
  label: "网格布局",
  span: 24,
  rules: { required: false },
  prop: "span",
  itemDefaultValue: 0,
  options: [
    { label: "6", value: 6 },
    { label: "12", value: 12 },
    { label: "18", value: 18 },
    { label: "24", value: 24 },
  ],
};

export const size: InsOptions = {
  oType: "select",
  key: "size",
  label: "尺寸",
  span: 24,
  rules: { required: false },
  prop: "size",
  itemDefaultValue: "default",
  options: [
    { label: "large", value: "large" },
    { label: "default", value: "default" },
    { label: "small", value: "small" },
  ],
};

export const placeholder: InsOptions = {
  oType: "input",
  key: "placeholder",
  label: "占位符",
  span: 24,
  rules: { required: false },
  prop: "placeholder",
  itemDefaultValue: "",
};

export const disabled: InsOptions = {
  oType: "switch",
  key: "disabled",
  label: "是否禁用",
  span: 24,
  rules: { required: false },
  prop: "disabled",
  itemDefaultValue: false,
};

export const clearable: InsOptions = {
  oType: "switch",
  key: "clearable",
  label: "可清空",
  span: 24,
  rules: { required: false },
  prop: "clearable",
  itemDefaultValue: true,
};

export const labelWidth: InsOptions = {
  oType: "number",
  key: "labelWidth",
  label: "标签宽度",
  span: 24,
  rules: { required: false },
  prop: "labelWidth",
  itemDefaultValue: 100,
};

// export const labelPosition:InsOptions = {
//   oType: "select",
//   key: "labelPosition",
//   label: "标签位置",
//   span: 24,
//   rules: { required: false },
//   prop: "labelPosition",
//   itemDefaultValue: "top",
//   options: [
//     { label: "top", value: "top" },
//     { label: "left", value: "left" },
//     { label: "right", value: "right" },
//   ],
// };
