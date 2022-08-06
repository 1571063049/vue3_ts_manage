import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()

  // return store.state.login.permissions.find(
  //   (item) => item === `system:${pageName}:${handleName}`
  // ) !== -1
  //   ? true
  //   : false
  return !!store.state.login.permissions.find(
    (item) => item === `system:${pageName}:${handleName}`
  )
}
