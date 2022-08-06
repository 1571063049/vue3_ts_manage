export const tableContentConfig = {
  title: '分类',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'title', label: '故事标题', minWidth: '100' },
    { prop: 'content', label: '故事内容', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    { prop: '操作', minWidth: '120', slotName: 'handle' }
  ],
  showFooter: false
}
