import { FormItem } from './form-item'
import { DynamicOptions } from '../types'
export class Dynamic extends FormItem implements DynamicOptions {
    oType: string = 'dynamic'
    itemDefaultValue: any = [{ label: '', value: '' }]
    type: string = 'text'
    maxlength: number = Infinity
    minlength: number = 0
    showWordLimit: boolean = false
    readonly: boolean = false
    constructor(options?: DynamicOptions) {
        super(options)
        this.init(options)
    }
    init(options?: DynamicOptions): void {
        if (options) {
        }
        this.setItemConfig(this)
    }
}