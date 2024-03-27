import { FormItem } from './form-item'
import { RateOptions } from '../types'
export class Rate extends FormItem implements RateOptions {
  oType: string = 'rate'
  itemDefaultValue: any = 0
  max: number = 5
  size: 'large' | 'default' | 'small' = 'default'
  allowHalf: boolean = false
  lowThreshold: number = 2
  highThreshold: number = 4
  colors: Array<string> = ["#F7BA2A", "#F7BA2A", "#F7BA2A"]
  voidColor: string = '#C6D1DE'
  disabledVoidColor: string = '#EFF2F7'
  constructor(options?: RateOptions) {
    super(options)
    this.init(options)
  }
  init(options?: RateOptions): void {
    if (options) {
    }
    this.setItemConfig(this)
  }
}