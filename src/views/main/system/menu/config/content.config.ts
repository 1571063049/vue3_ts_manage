export const tableContentConfig = {
  title: '菜单',
  showIndexColumn: false,
  showSelectColumn: false,
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '等级', minWidth: '100' },
    { prop: 'url', label: '菜单列表', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    { prop: 'parentId', label: '上级菜单ID', minWidth: '100' },
    { prop: 'sort', label: '菜单顺序', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    { prop: '操作', minWidth: '120', slotName: 'handle' }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
