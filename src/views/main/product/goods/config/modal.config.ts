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
      label: '服装名',
      placeholder: '请输入服装名'
    },
    {
      field: 'desc',
      type: 'input',
      label: '描述',
      placeholder: '请输入描述'
    },
    {
      field: 'oldProce',
      type: 'input',
      label: '旧价格',
      placeholder: '请输入旧价格'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '新价格',
      placeholder: '请输入新价格'
    },
    {
      field: 'inventoryCount',
      type: 'input',
      label: '库存',
      placeholder: '请输入库存'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入地址'
    },
    {
      field: 'imgUrl',
      type: 'input',
      label: '请输入url',
      placeholder: '请输入照片地址'
    }
  ]
}
