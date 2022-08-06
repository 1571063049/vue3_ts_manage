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
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '菜单列表',
      placeholder: '请输入菜单列表'
    },
    {
      field: 'type',
      type: 'input',
      label: '菜单类型',
      placeholder: '请输入菜单类型'
    }
  ]
}
