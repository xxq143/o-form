import { uid } from 'uid'
import { BaseOptions, FormResult, InsOptions, PropKeys } from '../types'
import * as defaultItemCfg from './config'

export class Base {
  _uid: string = ''
  _outPutProps: Array<string> = ['oType', 'key', 'prop', 'label', 'span', 'size', 'disabled', 'clearable', 'options', 'rules', 'itemDefaultValue', 'dictCode', '_uid']
  _itemForm: FormResult = { data: {}, config: [{ label: '', key: '', children: [] }] }
  key: string = ''
  label: string = ''
  prop: string = ''
  itemDefaultValue: any = null
  constructor(options?: BaseOptions) {
    this.baseInit(options)
  }
  baseInit(options?: BaseOptions) {
    const defaultUid: string = uid()
    if (options) {
      this.setUid(options._uid, defaultUid)
      this.setKey(options.key, defaultUid)
      this.setProp(options.prop, defaultUid)
      this.setLabel(options.label, defaultUid)
    } else {
      this.setUid('', defaultUid)
      this.setKey('', defaultUid)
      this.setProp('', defaultUid)
      this.setLabel('', defaultUid)
    }
    this.setItemConfig(this)
  }
  setItemConfig(data?: Record<string, any>): void {
    let reg = /^[_].+/
    if (data) {
      Object.keys(data).forEach(key => {
        if (key in this && !reg.test(key)) {
          this._itemForm.data[key] = data[key]
        }
      })
    }
    const options: Array<string> = Object.keys(this).filter(item => {
      return !reg.test(item)
    })
    const list: Set<string> = new Set(['key', 'label', ...options])
    const children: Array<InsOptions> = []
    list.forEach(key => {
      if (defaultItemCfg[key as PropKeys]) {
        children.push(defaultItemCfg[key as PropKeys])
      }
    })
    this._itemForm.config[0].children = children
  }
  getItemConfig(): FormResult {
    return this._itemForm
  }
  getUid(): string {
    return this._uid
  }
  setUid(uid?: string, value: string = '') {
    if (uid) {
      this._uid = uid
    } else {
      this._uid = value
    }
  }
  setKey(key: string, value?: string) {
    if (key) {
      this.key = key
      this.prop = key
    } else if (!key && value) {
      this.key = value
      this.prop = value
    }
  }
  // 这里默认只有一级，todo暂未处理嵌套逻辑
  setProp(prop: string, value?: string) {
    if (prop) {
      this.prop = prop
      this.key = prop
    } else if (!prop && value) {
      this.prop = value
      this.key = value
    }
  }
  setLabel(label: string, value: string) {
    if (label) {
      this.label = label
    } else {
      this.label = value
    }
  }
  update(data: Record<string, any> = {}): void {
    let reg = /^[_].+/
    Object.keys(data).forEach(key => {
      if (key in this && !reg.test(key)) {
        if ((key === 'key') && data[key]) {
          this.setKey(data[key])
        }
        this[key as keyof this] = data[key]
      }
    })
    this.setItemConfig(this)
  }
  updateDefaultValue(data: Record<string, any> = {}): void {
    let reg = /^[_].+/
    Object.keys(data).forEach(key => {
      if (!reg.test(key)) {
        if (key === this.key) {
          this.itemDefaultValue = data[key]
        }
      }
    })
  }
}