import { FormItem } from './form-item'
import { SliderOptions } from '../types'
export class Slider extends FormItem implements SliderOptions {
  oType: string = 'slider'
  itemDefaultValue: any = 0
  min: number = 0
  max: number = 100
  step: number = 1
  showInput: boolean = false
  showInputControls: boolean = true
  inputSize: '' | 'large' | 'default' | 'small' = 'default'
  showStops: boolean = false
  showTooltip: boolean = true
  formatTooltip: Function = () => { }
  range: boolean = false
  vertical: boolean = false
  height: string = ''
  rangeStartLabel: string = ''
  rangeEndLabel: string = ''
  formatValueText: Function = () => { }
  debounce: number = 300
  tooltipClass: string = ''
  placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' = 'top'
  marks: object = {}
  constructor(options?: SliderOptions) {
    super(options)
    this.init(options)
  }
  init(options?: SliderOptions): void {
    if (options) {
    }
  }
}