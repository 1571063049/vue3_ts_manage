export const tableContentConfig = {
  title: '分类',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'name', label: '类别名称', minWidth: '100' },
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
  showFooter: false
}
