import { FormItem } from './form-item'
import { SwitchOptions } from '../types'
export class Switch extends FormItem implements SwitchOptions {
  oType: string = 'switch'
  itemDefaultValue: any = false
  loading: boolean = false
  width: string | number = ''
  inlinePrompt: boolean = false
  activeIcon: string = ''
  inactiveIcon: string = ''
  activeText: string = ''
  inactiveText: string = ''
  activeValue: string | number | boolean = true
  inactiveValue: string | number | boolean = false
  beforeChange: boolean | Function = () => { }
  constructor(options?: SwitchOptions) {
    super(options)
    this.init(options)
  }
  init(options?: SwitchOptions): void {
    if (options) {
    }
  }
}