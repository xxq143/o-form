import { FormItem } from './form-item'
import { DatePickerOptions } from '../types'

const shortcuts: Array<any> = [
  {
    text: "Today",
    value: new Date(),
  },
  {
    text: "Yesterday",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "A week ago",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];
export class DatePicker extends FormItem implements DatePickerOptions {
  oType: string = 'date-picker'
  itemDefaultValue: any = ''
  disabledDate: Function = () => { }
  readonly: boolean = false
  editable: boolean = true
  startPlaceholder: string = ''
  endPlaceholder: string = ''
  type: string = 'date-picker'
  format: string = 'YYYY/MM/DD'
  valueFormat: string = 'YYYY/MM/DD'
  popperClass: string = ''
  rangeSeparator: string = '-'
  defaultValue: Date = new Date()
  unlinkPanels: boolean = false
  prefixIcon: string = ''
  shortcuts: Array<any> = shortcuts
  cellClassName: Function = () => { }
  teleported: boolean = true
  constructor(options?: DatePickerOptions) {
    super(options)
    this.init(options)
  }
  init(options?: DatePickerOptions): void {
    if (options) {
    } else {
    }
    this.setItemConfig(this)
  }
}