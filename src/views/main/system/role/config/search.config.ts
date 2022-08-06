import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'id',
      type: 'id',
      label: 'id',
      placeholder: '请输入id'
    },

    {
      field: 'createAt',
      type: 'datepicker',
      label: 'datepicker',
      placeholder: '请输入选择时间',
      otherOptions: {
        startPlaceholder: 'Start Time',
        endPlaceholder: 'End Time',
        type: 'datetimerange'
      }
    }
  ]
}
