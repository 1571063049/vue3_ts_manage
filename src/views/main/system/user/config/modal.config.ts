import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  title: '用户',
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
      label: '用户名',
      placeholder: '请输入用户名',
      rules: [
        {
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z]{5,10}$/,
          message: '用户名为5~10个字母',
          trigger: 'blur'
        }
      ]
    },

    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      rules: [
        {
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      rules: [
        {
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{4,}$/,
          message: '密码为4位以上的字母或者数字',
          trigger: 'blur'
        }
      ],
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码',
      rules: [
        {
          required: true,
          message: '电话号码不能为空',
          trigger: 'blur'
        },
        {
          // pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
          pattern: /^1([0-9]{10})$/,
          message: '请输入正确的手机号',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: []
    }
  ]
}
