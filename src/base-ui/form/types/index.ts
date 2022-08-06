type FormType = 'input' | 'password' | 'id' | 'select' | 'datepicker'

interface IDatepickerType {
  placeholder?: string
  startPlaceholder?: string
  endPlaceholder?: string
  type?: string
}

interface ISelectType {
  title: string
  value: number
}

export interface IFormItem {
  field: string
  type: FormType
  label: string
  placeholder: string
  rules?: any[]
  // 针对select
  options?: ISelectType[]
  // 针对datepicker
  otherOptions?: IDatepickerType
  isHidden?: boolean
}

export interface IForm {
  title?: string
  formItems: IFormItem[]
  itemStyle: any
  labelWidth: string
  colLayout?: any
}
