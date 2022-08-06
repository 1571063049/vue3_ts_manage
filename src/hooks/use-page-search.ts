import { ref } from 'vue'

import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const acceptResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  const acceptQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, acceptResetClick, acceptQueryClick]
}
