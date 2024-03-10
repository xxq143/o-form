import { Base } from "./base";
import { Cascader } from './cascader'
import { Checkbox } from './checkbox'
import { Color } from './color'
import { DatePicker } from './date-picker'
import { DateTimePicker } from './date-time-picker'
import { Input } from './input'
import { Number } from './number'
import { Radio } from './radio'
import { Rate } from './rate'
import { Select } from './select'
import { Slider } from './slider'
import { Switch } from './switch'
import { TimePicker } from './time-picker'
import { TimeSelect } from './time-select'
import { FormOptions, FormResult, AllIns, InsMap, FormTypes, AllInstance, InsOptions, Config } from '../types'
import { cloneDeep } from 'lodash'

export class Form extends Base implements FormOptions {
  static insMap: InsMap = {
    cascader: Cascader,
    checkbox: Checkbox,
    color: Color,
    'date-picker': DatePicker,
    'date-time-picker': DateTimePicker,
    input: Input,
    number: Number,
    radio: Radio,
    rate: Rate,
    select: Select,
    slider: Slider,
    switch: Switch,
    'time-picker': TimePicker,
    'time-select': TimeSelect
  }
  labelWidth: string | number = ''
  labelPosition: 'left' | 'right' | 'top' = 'right'
  form: FormResult = {
    data: {},
    config: [{
      label: '',
      key: '',
      children: []
    }],
    list: [],
  }
  types: Array<FormTypes> = ['cascader', 'checkbox', 'color', 'date-picker', 'date-time-picker', 'input', 'number', 'radio', 'rate', 'select', 'slider', 'switch', 'time-picker', 'time-select']
  isTest: boolean = true
  public constructor(options?: FormOptions) {
    super(options)
    this.formInit(options)
  }
  formInit(options?: FormOptions): void {
    if (options) {
    }
    this.setItemConfig(this)
  }
  addToForm(ins: AllIns): void {
    this.form.list?.push(ins)
    const { data, config } = ins.getConfig()
    this.form.config[0].children?.push(config)
    Object.keys(data).forEach(key => {
      this.form.data[key] = data[key]
    })
  }
  addItem(type: FormTypes): void {
    if (this.types.includes(type)) {
      const ins = new Form.insMap[type]()
      this.addToForm(ins)
    } else {
      console.error(`${type} 类型不存在`)
    }
  }

  removeByUid(uid: string | undefined): void {
    if (uid) {
      const findIns = this.form.list?.find(item => item._uid === uid)
      if (findIns) {
        const index = this.form.config[0].children?.findIndex(child => child._uid === findIns._uid)
        if (typeof index === 'number') {
          this.form.config[0].children?.splice(index, 1)
        }
        delete this.form.data[findIns.key]
      }
      this.form.list = this.form.list?.filter(item => item._uid !== uid)
    }
  }

  removeItem(payload: string | InsOptions | AllInstance): void {
    if (payload && typeof payload === "string") {
      this.removeByUid(payload)
    } else if (payload && typeof payload === "object" && payload !== null && '_uid' in payload) {
      this.removeByUid(payload._uid)
    }
  }
  updateItemDefaultValue(uid: string, data: Record<string, any>): void {
    const currentIns = this.form.list?.find(item => item._uid === uid)
    if (currentIns) {
      currentIns.updateDefaultValue(data)
    }
  }
  updateItem(uid: string, data: Record<string, any>): void {
    const currentIns = this.form.list?.find(item => item._uid === uid)
    if (currentIns) {
      // todo 可以优化重复提示等
      const oldIns = cloneDeep(currentIns)
      currentIns.update(data)
      const index = this.form.config[0].children?.findIndex(child => child._uid === uid)
      if (typeof index === 'number') {
        const { config } = currentIns.getConfig()
        this.form.config[0].children?.splice(index, 1, config)
        delete this.form.data[oldIns.key]
        this.form.data[config.key] = config.itemDefaultValue
      } else {
        console.error(`未找到 uid: ${uid}对应的配置信息`)
      }
    }
  }
  getFormItem(uid: string): Config | undefined {
    return this.form.config[0].children?.find(child => child._uid === uid)
  }
  getFormItemIns(uid: string): AllIns | undefined {
    return this.form.list?.find(item => item._uid === uid)
  }
  getFormConfig(): FormResult {
    let result: FormResult = {
      data: this.form.data,
      config: this.form.config,
      json: `暂未添加表单配置`
    }
    if (this.form.config[0].children?.length && Object.keys(this.form.data).length) {
      const data = cloneDeep(this.form.data)
      const config = cloneDeep(this.form.config)
      result = {
        data,
        config,
        json: `const data = ${JSON.stringify(data)}
const config = ${JSON.stringify(config)}`
      }
    }
    return result
  }
}