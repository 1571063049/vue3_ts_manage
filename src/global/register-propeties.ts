import { App } from 'vue'

import { formatUTCString } from '@/utils/data-format'

export default function registerPropeties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUTCString(value)
    }
  }
}
