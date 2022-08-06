export const tableContentConfig = {
  title: '商品',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'id', label: '商品Id', minWidth: '50' },
    { prop: 'oldPrice', label: '当前价格', minWidth: '60' },
    { prop: 'newPrice', label: '之前价格', minWidth: '60' },
    { prop: 'desc', label: '商品描述', minWidth: '80' },
    { prop: 'imgUrl', label: '照片', minWidth: '100', slotName: 'imgUrl' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    { prop: 'address', label: '地址', minWidth: '100' },
    { prop: 'inventoryCount', label: '库存', minWidth: '50' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '180',
      slotName: 'updateAt'
    },
    { prop: '操作', minWidth: '120', slotName: 'handle' }
  ]
}
