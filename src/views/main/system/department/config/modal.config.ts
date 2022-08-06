import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  title: '部门',
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
      label: '部门名',
      placeholder: '请输入部门名'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    },
    {
      field: 'parentId',
      type: 'input',
      label: '上级部门',
      placeholder: '请输入上级部门'
    }
  ]
}
