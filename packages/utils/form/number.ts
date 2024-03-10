import { FormItem } from './form-item'
import { NumberOptions } from '../types'
export class Number extends FormItem implements NumberOptions {
  oType: string = 'number'
  itemDefaultValue: any = 0
  min: number = -Infinity
  max: number = Infinity
  step: number = 1
  stepStrictly: boolean = false
  precision: number = 0
  readonly: boolean = false
  controls: boolean = true
  controlsPosition: '' | 'right' = ''
  valueOnClear: number | null | 'min' | 'max' = 'min'
  constructor(options?: NumberOptions) {
    super(options)
    this.init(options)
  }
  init(options?: NumberOptions): void {
    if (options) {
    }
  }
}