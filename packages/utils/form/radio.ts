import { FormItem } from './form-item'
import { RadioOptions, RadioProps, Options } from '../types'
export class Radio extends FormItem implements RadioOptions {
  oType: string = 'radio'
  itemDefaultValue: any = false
  border: boolean = true
  options: Array<Options> = []
  size: 'large' | 'default' | 'small' = 'default'
  textColor: string = '#ffffff'
  fill: string = '#409EFF'
  props: RadioProps = {
    disabled: false,
    border: true,
    size: 'default'
  }
  constructor(options?: RadioOptions) {
    super(options)
    this.init(options)
  }
  init(options?: RadioOptions): void {
    if (options) {
    }
  }
}