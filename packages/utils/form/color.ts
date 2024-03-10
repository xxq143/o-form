import { FormItem } from './form-item'
import { ColorOptions } from '../types'

const predefineColors: Array<string> = [
  "#ff4500",
  "#ff8c00",
  "#ffd700",
  "#90ee90",
  "#00ced1",
  "#1e90ff",
  "#c71585",
  "rgba(255, 69, 0, 0.68)",
  "rgb(255, 120, 0)",
  "hsv(51, 100, 98)",
  "hsva(120, 40, 94, 0.5)",
  "hsl(181, 100%, 37%)",
  "hsla(209, 100%, 56%, 0.73)",
  "#c7158577",
];

export class Color extends FormItem implements ColorOptions {
  oType: string = 'color'
  itemDefaultValue: any = ''
  showAlpha: boolean = true
  predefine: Array<string> = predefineColors
  popperClass: string = ''
  colorFormat: 'hsl' | 'hsv' | 'hex' | 'rgb' | 'hex' | 'rgb' = 'hex'
  constructor(options?: ColorOptions) {
    super(options)
    this.init(options)
  }
  init(options?: ColorOptions): void {
    if (options) {
    } else {
    }
    this.setItemConfig(this)
  }
}