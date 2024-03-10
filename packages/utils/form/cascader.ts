import { FormItem } from './form-item'
import { CascaderOptions, CascaderProps, Options } from '../types'

export class Cascader extends FormItem implements CascaderOptions {
  oType: string = 'cascader'
  itemDefaultValue: any = ''
  options: Array<Options> = []
  showAllLevels: boolean = false
  filterable: boolean = true
  filterMethod: Function = () => { }
  debounce: number = 300
  beforeFilter: Function = () => { }
  popperClass: string = ''
  teleported: boolean = true
  tagType: 'success' | 'info' | 'warning' | 'danger' = 'info'
  props: CascaderProps = {
    multiple: false,
    checkStrictly: true,
    expandTrigger: 'hover',
    emitPath: false,
  }
  constructor(options?: CascaderOptions) {
    super(options)
    this.init(options)
  }
  init(options?: CascaderOptions): void {
    if (options) {
      this.setOptions(options.options)
      this.setShowAllLevels(options.showAllLevels)
      this.setFilterable(options.filterable)
      this.setFilterMethod(options.filterMethod)
      this.setDebounce(options.debounce)
      this.setBeforeFilter(options.beforeFilter)
      this.setPopperClass(options.popperClass)
      this.setteleported(options.teleported)
      this.settagType(options.tagType)
    } else {
      this.setOptions()
      this.setShowAllLevels()
      this.setFilterable()
      this.setFilterMethod()
      this.setDebounce()
      this.setBeforeFilter()
      this.setPopperClass()
      this.setteleported()
      this.settagType()
    }
  }
  setOptions(options?: Array<Options>) {
    if (options) {
      this.options = options
    } else {
      this.options = []
    }
  }
  setShowAllLevels(showAllLevels?: boolean) {
    if (showAllLevels) {
      this.showAllLevels = showAllLevels
    } else {
      this.showAllLevels = false
    }
  }

  setFilterable(filterable?: boolean) {
    if (filterable) {
      this.filterable = filterable
    } else {
      this.filterable = true
    }
  }
  setFilterMethod(filterMethod?: Function) {
    if (filterMethod) {
      this.filterMethod = filterMethod
    } else {
      this.filterMethod = () => { }
    }
  }
  setDebounce(debounce?: number) {
    if (debounce) {
      this.debounce = debounce
    } else {
      this.debounce = 300
    }
  }
  setBeforeFilter(beforeFilter?: Function) {
    if (beforeFilter) {
      this.beforeFilter = beforeFilter
    } else {
      this.beforeFilter = () => { }
    }
  }
  setPopperClass(popperClass?: string) {
    if (popperClass) {
      this.popperClass = popperClass
    } else {
      this.popperClass = ''
    }
  }
  setteleported(teleported?: boolean) {
    if (teleported) {
      this.teleported = teleported
    } else {
      this.teleported = true
    }
  }
  settagType(tagType?: 'success' | 'info' | 'warning' | 'danger') {
    if (tagType) {
      this.tagType = tagType
    } else {
      this.tagType = 'info'
    }
  }
}