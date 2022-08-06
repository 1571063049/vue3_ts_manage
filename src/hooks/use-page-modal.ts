import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type callbackFn = (item?: any) => void

export function usePageModal(newcall?: callbackFn, editcall?: callbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const acceptNewClick = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.DialogVisible = true
    }
    newcall && newcall()
  }

  const acceptEditClick = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.DialogVisible = true
    }
    editcall && editcall(item)
  }

  return [pageModalRef, defaultInfo, acceptNewClick, acceptEditClick]
}
