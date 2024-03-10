import { Base } from './base'
import { FormItemOptions, Rules, InsOptions } from '../types'
export class FormItem extends Base implements FormItemOptions {
    oType: string = ''
    span?: number = 6
    size?: string = 'default'
    placeholder?: string = '请输入'
    disabled?: boolean = false
    clearable?: boolean = true
    rules?: Rules = { required: true, trigger: 'blur', message: '请输入' }
    constructor(options?: FormItemOptions) {
        super(options)
        this.itemInit(options)
    }
    itemInit(options?: FormItemOptions) {
        if (options) {
            this.setSpan(options.span)
            this.setSize(options.size)
            this.setPlaceholder(options.placeholder)
            this.setDisabled(options.disabled)
            this.setClearable(options.clearable)
        }
        this.setItemConfig(this)
    }
    setSpan(span: number | undefined) {
        if (span) {
            this.span = span
        }
    }
    setSize(size: string | undefined) {
        if (size) {
            this.size = size
        }
    }
    setPlaceholder(placeholder: string | undefined) {
        if (placeholder) {
            this.placeholder = placeholder
        }
    }
    setDisabled(disabled: boolean | undefined) {
        if (disabled === true || disabled === false) {
            this.disabled = disabled
        }
    }
    setClearable(clearable: boolean | undefined) {
        if (clearable === true || clearable === false) {
            this.clearable = clearable
        }
    }
    getConfig(list: Array<string> = this._outPutProps) {
        let copyConfig: Record<string, any> = {}
        let copyData: Record<string, any> = {
            [this.key]: this.itemDefaultValue
        }
        Object.keys(this).forEach(key => {
            if (list.includes(key)) {
                copyConfig[key] = this[key as keyof this]
            }
        })
        return {
            data: copyData,
            config: copyConfig as InsOptions
        }
    }
}