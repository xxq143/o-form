import { FormItem } from './form-item'
import { CheckboxOptions, CheckboxProps, Options } from '../types'

export class Checkbox extends FormItem implements CheckboxOptions {
  oType: string = 'checkbox'
  itemDefaultValue: any = []
  useIndeterminate: boolean = false
  options: Array<Options> = []
  min: number = 0
  max: number = Infinity
  textColor: string = 'ffffff'
  fill: string = '#409EFF'
  tag: string = 'div'
  props: CheckboxProps = {
    trueLabel: '',
    falseLabel: '',
    disabled: false,
    border: true,
    checked: false,
    indeterminate: false
  }
  constructor(options?: CheckboxOptions) {
    super(options)
    this.init(options)
  }
  init(options?: CheckboxOptions): void {
    if (options) {
      this.setOptions(options.options)
    } else {
      this.setOptions()
    }
    this.setItemConfig(this)
  }
  setOptions(options?: Array<Options>) {
    if (options) {
      this.options = options
    } else {
      this.options = []
    }
  }
}