import { App } from 'vue'

import registerElement from './register-element'
import registerElementIcon from './register-element-icon'
import registerPropeties from './register-propeties'
import registerComponent from './register-component'

export default function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerElementIcon)
  app.use(registerPropeties)
  app.use(registerComponent)
}
