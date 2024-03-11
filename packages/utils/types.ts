import { Cascader } from './form/cascader'
import { Checkbox } from './form/checkbox'
import { Color } from './form/color'
import { DatePicker } from './form/date-picker'
import { DateTimePicker } from './form/date-time-picker'
import { Dynamic } from './form/dynamic'
import { Input } from './form/input'
import { Number } from './form/number'
import { Radio } from './form/radio'
import { Rate } from './form/rate'
import { Select } from './form/select'
import { Slider } from './form/slider'
import { Switch } from './form/switch'
import { TimePicker } from './form/time-picker'
import { TimeSelect } from './form/time-select'
export { type PropKeys } from './form/config'
export type AllInstance = new () => (Cascader | Checkbox | Color | DatePicker | DateTimePicker | Dynamic | Input | Number | Radio | Rate | Select | Slider | Switch | TimePicker | TimeSelect)
export type AllIns = Cascader | Checkbox | Color | DatePicker | DateTimePicker | Dynamic | Input | Number | Radio | Rate | Select | Slider | Switch | TimePicker | TimeSelect
export interface InsMap {
    readonly [key: string]: AllInstance
}

export type FormTypes = 'cascader' | 'checkbox' | 'color' | 'date-picker' | 'date-time-picker' | 'dynamic' | 'input' | 'number' | 'radio' | 'rate' | 'select' | 'slider' | 'switch' | 'time-picker' | 'time-select'

export type InsOptions = CascaderOptions | CheckboxOptions | ColorOptions | DatePickerOptions | DateTimePickerOptions | DynamicOptions | InputOptions | NumberOptions | RadioOptions | RateOptions | SelectOptions | SliderOptions | SwitchOptions | TimePickerOptions | TimeSelectOptions

export interface BaseOptions {
    key: string
    prop: string
    label: string
    itemDefaultValue: any
    _itemForm?: FormResult
    _uid?: string
    _outPutProps?: Array<string>
}

export interface Config {
    label: string
    key: string
    children?: Array<InsOptions>
}

export interface FormData {
    [key: string]: any
}

export interface FormResult {
    data: FormData,
    config: Array<Config>
    list?: Array<AllIns>
    json?: string
}

export interface FormOptions extends BaseOptions {
    labelWidth?: string | number
    labelPosition: 'left' | 'right' | 'top'
    dictionary?: Record<string, Array<Options>>,
    form: FormResult
    types: Array<FormTypes>
    isTest?: boolean
}
export interface AutoSize {
    minRows?: number
    maxRows?: number
}

export interface Rules {
    required?: boolean
    message?: string
    trigger?: 'blur' | 'change'
}
export interface FormItemOptions extends BaseOptions {
    oType: string
    span?: number
    size?: string
    placeholder?: string
    disabled?: boolean
    clearable?: boolean
    rules?: Rules
    dictCode?: string
}

export interface Options {
    label: string
    value: string | number | boolean | object
    children?: Array<Options>
}
export interface CascaderProps {
    multiple?: boolean
    checkStrictly?: boolean
    expandTrigger?: string
    emitPath?: boolean
}

export interface CascaderOptions extends FormItemOptions {
    options?: Array<Options>
    showAllLevels?: boolean
    filterable?: boolean
    filterMethod?: Function
    debounce?: number
    beforeFilter?: Function
    popperClass?: string
    teleported?: boolean
    tagType?: 'success' | 'info' | 'warning' | 'danger'
    props?: CascaderProps
}

export interface CheckboxProps {
    trueLabel?: string | number
    falseLabel?: string
    disabled?: boolean
    border?: boolean
    checked?: boolean
    indeterminate?: boolean
}
export interface CheckboxOptions extends FormItemOptions {
    useIndeterminate?: boolean
    options?: Array<Options>
    min?: number
    max?: number
    textColor?: string
    fill?: string
    tag?: string
    props?: CheckboxProps
}

export interface ColorOptions extends FormItemOptions {
    showAlpha?: boolean
    predefine?: Array<string>
    popperClass?: string
    colorFormat?: 'hsl' | 'hsv' | 'hex' | 'rgb' | 'hex' | 'rgb'
}

export interface DatePickerOptions extends FormItemOptions {
    type: string
    disabledDate?: Function
    readonly?: boolean
    editable?: boolean
    startPlaceholder?: string
    endPlaceholder?: string
    format?: string
    valueFormat?: string
    popperClass?: string
    rangeSeparator?: string
    defaultValue?: Date
    unlinkPanels?: boolean
    prefixIcon?: string
    shortcuts?: Array<any>
    cellClassName?: Function
    teleported?: boolean
}

export interface DateTimePickerOptions extends FormItemOptions {
    type: string
    disabledDate?: Function
    readonly?: boolean
    editable?: boolean
    startPlaceholder?: string
    endPlaceholder?: string
    format?: string
    valueFormat?: string
    popperClass?: string
    rangeSeparator?: string
    defaultValue?: Date
    unlinkPanels?: boolean
    prefixIcon?: string
    clearIcon?: string
    shortcuts?: Array<any>
    cellClassName?: Function
    teleported?: boolean
    arrowControl?: boolean
}

export interface DynamicOptions extends FormItemOptions {
    oType: string
    itemDefaultValue: any
    type?: string
    maxlength?: number
    minlength?: number
    showWordLimit?: boolean
    readonly?: boolean
}

export interface InputOptions extends FormItemOptions {
    type: string
    maxlength?: number
    minlength?: number
    showWordLimit?: boolean
    showPassword?: boolean
    prefixIcon?: string
    suffixIcon?: string
    rows?: number
    autosize?: AutoSize
    readonly?: boolean
    autofocus?: boolean
    inputStyle?: string
}

export interface NumberOptions extends FormItemOptions {
    min?: number
    max?: number
    step?: number
    stepStrictly?: boolean
    precision?: number
    readonly?: boolean
    controls?: boolean
    controlsPosition?: '' | 'right'
    valueOnClear?: number | null | 'min' | 'max'
}

export interface RadioProps {
    disabled?: boolean
    border?: boolean
    size?: 'large' | 'default' | 'small'
}

export interface RadioOptions extends FormItemOptions {
    textColor?: string
    fill?: string
    options?: Array<Options>
    props?: RadioProps
}

export interface RateOptions extends FormItemOptions {
    max?: number
    size?: 'large' | 'default' | 'small'
    allowHalf?: boolean
    lowThreshold?: number
    highThreshold?: number
    colors?: Array<string>
    voidColor?: string
    disabledVoidColor?: string
}

export interface SelectOptions extends FormItemOptions {
    multiple?: boolean
    valueKey?: string
    collapseTags?: boolean
    collapseTagsTooltip?: boolean
    multipleLimit?: number
    effect?: 'dark' | 'light'
    autocomplete?: string
    filterable?: boolean
    allowCreate?: boolean
    filterMethod?: Function
    remote?: boolean
    remoteMethod?: Function
    remoteShowSuffix?: boolean
    loading?: boolean
    loadingText?: string
    noMatchText?: string
    popperClass?: string
    reserveKeyword?: boolean
    defaultFirstOption?: boolean
    teleported?: boolean
    persistent?: boolean
    automaticDropdown?: boolean
    clearIcon?: string
    fitInputWidth?: boolean
    suffixIcon?: string | object
    tagType?: '' | 'success' | 'info' | 'warning' | 'danger'
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
    maxCollapseTags?: number
    options?: Array<Options>
}

export interface SliderOptions extends FormItemOptions {
    min?: number
    max?: number
    step?: number
    showInput?: boolean
    showInputControls?: boolean
    inputSize?: '' | 'large' | 'default' | 'small'
    showStops?: boolean
    showTooltip?: boolean
    formatTooltip?: Function
    range?: boolean
    vertical?: boolean
    height?: string
    rangeStartLabel?: string
    rangeEndLabel?: string
    formatValueText?: Function
    debounce?: number
    tooltipClass?: string
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
    marks?: object
}

export interface SwitchOptions extends FormItemOptions {
    loading?: boolean
    width?: string | number
    inlinePrompt?: boolean
    activeIcon?: string
    inactiveIcon?: string
    activeText?: string
    inactiveText?: string
    activeValue?: string | number | boolean
    inactiveValue?: string | number | boolean
    beforeChange?: boolean | Function
}



export interface TimePickerOptions extends FormItemOptions {
    disabledDate?: Function
    readonly?: boolean
    editable?: boolean
    startPlaceholder?: string
    endPlaceholder?: string
    isRange?: boolean
    arrowControl?: boolean
    popperClass?: string
    rangeSeparator?: string
    format?: string
    valueFormat?: string
    defaultValue?: Date
    prefixIcon?: string
    clearIcon?: string
    disabledHours?: Function
    disabledMinutes?: Function
    disabledSeconds?: Function
    teleported?: boolean
}
export interface TimeSelectOptions extends FormItemOptions {
    disabledDate?: Function
    readonly?: boolean
    editable?: boolean
    effect?: 'dark' | 'light'
    prefixIcon?: string
    clearIcon?: string
    start?: string
    end?: string
    step?: string
    minTime?: string
    maxTime?: string
    format?: string
}