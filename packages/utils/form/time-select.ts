import { FormItem } from './form-item'
import { TimeSelectOptions } from '../types'
export class TimeSelect extends FormItem implements TimeSelectOptions {
  oType: string = 'time-select'
  itemDefaultValue: any = ''
  disabledDate: Function = () => { }
  readonly: boolean = false
  editable: boolean = true
  effect: 'dark' | 'light' = 'light'
  prefixIcon: string = ''
  clearIcon: string = ''
  start: string = '00:00'
  end: string = '23:59'
  step: string = '00:30'
  minTime: string = ''
  maxTime: string = ''
  format: string = 'HH:mm'
  constructor(options?: TimeSelectOptions) {
    super(options)
    this.init(options)
  }
  init(options?: TimeSelectOptions): void {
    if (options) {
    }
  }
}