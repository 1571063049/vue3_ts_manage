import { App } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

export default function registerComponent(app: App) {
  app.component('page-search', PageSearch)
  app.component('page-content', PageContent)
  app.component('page-modal', PageModal)
}
