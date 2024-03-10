import { FormItem } from './form-item'
import { SelectOptions, Options } from '../types'
export class Select extends FormItem implements SelectOptions {
  oType: string = 'select'
  itemDefaultValue: any = ''
  multiple: boolean = false
  valueKey: string = 'value'
  collapseTags: boolean = false
  collapseTagsTooltip: boolean = false
  multipleLimit: number = 0
  effect: 'dark' | 'light' = 'light'
  autocomplete: string = 'off'
  filterable: boolean = true
  allowCreate: boolean = false
  filterMethod: Function = () => { }
  remote: boolean = false
  remoteMethod: Function = () => { }
  remoteShowSuffix: boolean = false
  loading: boolean = false
  loadingText: string = ''
  noMatchText: string = ''
  popperClass: string = ''
  reserveKeyword: boolean = true
  defaultFirstOption: boolean = false
  teleported: boolean = true
  persistent: boolean = true
  automaticDropdown: boolean = false
  clearIcon: string = 'CircleClose'
  fitInputWidth: boolean = false
  suffixIcon: string | object = 'ArrowDown'
  tagType: '' | 'success' | 'info' | 'warning' | 'danger' = 'info'
  placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' = 'bottom-start'
  maxCollapseTags: number = 1
  options: Array<Options> = []
  constructor(options?: SelectOptions) {
    super(options)
    this.init(options)
  }
  init(options?: SelectOptions): void {
    if (options) {
    }
  }
}