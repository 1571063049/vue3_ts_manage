class LocalCache {
  storage: Storage
  constructor(isLocal = true) {
    this.storage = isLocal ? window.localStorage : window.sessionStorage
  }

  setCache(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    this.storage.removeItem(key)
  }

  claerCache() {
    this.storage.clear()
  }
}
const storage = new LocalCache()

export default storage
