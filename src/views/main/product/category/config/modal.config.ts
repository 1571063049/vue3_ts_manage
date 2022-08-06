import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  title: '菜单',
  labelWidth: '100px',
  itemStyle: {
    padding: '6px 20px'
  },
  colLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '分类名',
      placeholder: '请输入分类名'
    }
  ]
}
