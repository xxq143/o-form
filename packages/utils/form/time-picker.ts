import { FormItem } from './form-item'
import { TimePickerOptions } from '../types'
export class TimePicker extends FormItem implements TimePickerOptions {
  oType: string = 'time-picker'
  itemDefaultValue: any = ''
  disabledDate: Function = () => { }
  readonly: boolean = false
  editable: boolean = true
  startPlaceholder: string = ''
  endPlaceholder: string = ''
  isRange: boolean = false
  arrowControl: boolean = true
  popperClass: string = ''
  rangeSeparator: string = '-'
  format: string = 'HH:mm:ss'
  valueFormat: string = 'HH:mm:ss'
  defaultValue: Date = new Date()
  prefixIcon: string = ''
  clearIcon: string = ''
  disabledHours: Function = () => { }
  disabledMinutes: Function = () => { }
  disabledSeconds: Function = () => { }
  teleported: boolean = true
  constructor(options?: TimePickerOptions) {
    super(options)
    this.init(options)
  }
  init(options?: TimePickerOptions): void {
    if (options) {
    }
  }
}