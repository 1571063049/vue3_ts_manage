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
      placeholder: '请输入商品id'
    },
    {
      field: 'price',
      type: 'input',
      label: '商品价格',
      placeholder: '请输入商品价格'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入商品地址'
    }
  ]
}
