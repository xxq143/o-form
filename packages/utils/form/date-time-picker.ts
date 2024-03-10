
import { FormItem } from './form-item'
import { DateTimePickerOptions } from '../types'
const shortcuts = [
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


export class DateTimePicker extends FormItem implements DateTimePickerOptions {
  oType: string = 'date-time-picker'
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
  clearIcon: string = ''
  arrowControl: boolean = true
  constructor(options?: DateTimePickerOptions) {
    super(options)
    this.init(options)
  }
  init(options?: DateTimePickerOptions): void {
    if (options) {
    } else {
    }
  }
}