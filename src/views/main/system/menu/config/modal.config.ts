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
      label: '菜单名',
      placeholder: '请输入菜单名'
    },
    {
      field: 'type',
      type: 'select',
      label: '等级',
      placeholder: '请输入菜单等级',
      options: [
        { title: '一级部门', value: 1 },
        { title: '二级部门', value: 2 },
        { title: '三级部门', value: 3 }
      ]
    },
    {
      field: 'url',
      type: 'input',
      label: '菜单列表',
      placeholder: '请输入菜单类列'
    },
    {
      field: 'parentId',
      type: 'input',
      label: '上级部门id',
      placeholder: '请输入上级部门id'
    },
    {
      field: 'sort',
      type: 'input',
      label: '菜单顺序',
      placeholder: '请输入菜单顺序'
    }
  ]
}
