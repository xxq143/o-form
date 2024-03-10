import { uid } from 'uid'
import { BaseOptions, FormResult, InsOptions, PropKeys } from '../types'
import * as defaultItemCfg from './config'

export class Base {
  _uid: string = ''
  _outPutProps: Array<string> = ['oType', 'key', 'prop', 'label', 'span', 'size', 'disabled', 'clearable', 'rules', 'itemDefaultValue', '_uid']
  _itemForm: FormResult = { data: {}, config: [{ label: '', key: '', children: [] }] }
  key: string = ''
  label: string = ''
  constructor(options?: BaseOptions) {
    this.baseInit(options)
  }
  baseInit(options?: BaseOptions) {
    const defaultUid: string = uid()
    if (options) {
      this.setUid(options._uid, defaultUid)
      this.setKey(options.key, defaultUid)
      this.setLabel(options.label, defaultUid)
    } else {
      this.setUid('', defaultUid)
      this.setKey('', defaultUid)
      this.setLabel('', defaultUid)
    }
    this.setItemConfig(this)
  }
  setItemConfig(data?: Record<string, any>, options: Array<string> = []): void {
    if (data) {
      let reg = /^[_].+/
      Object.keys(data).forEach(key => {
        if (key in this && !reg.test(key)) {
          this._itemForm.data[key] = data[key]
        }
      })
    }
    const list: Array<string> = ['key', 'label', ...options]
    const children: Array<InsOptions> = list.map(key => {
      return defaultItemCfg[key as PropKeys]
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
  setKey(key: string, value: string) {
    if (key) {
      this.key = key
    } else {
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
  update(data: Record<string, any> = {}) {
    let reg = /^[_].+/
    Object.keys(data).forEach(key => {
      if (key in this && !reg.test(key)) {
        this[key as keyof this] = data[key]
      }
    })
  }
}