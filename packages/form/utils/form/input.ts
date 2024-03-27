import { FormItem } from './form-item'
import { InputOptions, AutoSize } from '../types'
export class Input extends FormItem implements InputOptions {
  oType: string = 'input'
  itemDefaultValue: any = ''
  type: string = 'text'
  maxlength: number = Infinity
  minlength: number = 0
  showWordLimit: boolean = false
  showPassword: boolean = true
  prefixIcon: string = ''
  suffixIcon: string = ''
  rows: number = 2
  autosize: AutoSize = { minRows: 2, maxRows: 6 }
  readonly: boolean = false
  autofocus: boolean = false
  inputStyle: string = ''
  constructor(options?: InputOptions) {
    super(options)
    this.init(options)
  }
  init(options?: InputOptions): void {
    if (options) {
    }
    this.setItemConfig(this)
  }
}