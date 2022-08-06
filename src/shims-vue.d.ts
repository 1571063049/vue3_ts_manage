/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare class LocalCache {
  storage: Storage
  constructor(isLocal = true) {
    this.storage = isLocal ? window.localStorage : window.sessionStorage
  }
}

declare module '*.json'
