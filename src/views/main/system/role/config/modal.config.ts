import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  title: '角色',
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
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ]
}
