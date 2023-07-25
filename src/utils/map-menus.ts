import { RouteRecordRaw } from 'vue-router'
import { IBreadCrumb } from '@/base-ui/bread-crumb'

let firstPath: any = null

export function mapManusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //  1.先去获取默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // 获取所有的文件路径信息--> routeFiles.keys() ---['./analysis/dashboard/dashboard.ts',...]
  const routeFiles = require.context('../router/main', true, /\.ts/)

  routeFiles.keys().forEach((path) => {
    // 获取所有route(去除.)  './analysis/dashboard/dashboard.ts' -> '/analysis/dashboard/dashboard.ts'
    const route = require('../router/main' + path.split('.')[1])
    // 获取所有路由的路径信息
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  function _recurseGetRoute(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstPath) {
          // 将找到的第一个路由作为启动页面的开始路由，即路由重定向为'/main'时跳转到firstPath
          // redirect = '/main'  ---->  beforeRouter(){if (to === '/main') return (path: )'/main/analysis/dashboard'}
          firstPath = menu.url
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

// 路径到面包屑的映射
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadCrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// 路径到菜单的映射
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadCrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, path: menu.url })
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 获取用户所拥有的的菜单权限
export function mapMenusToPermissions(userMenu: any) {
  const permissions: any[] = []
  function _recurseGetPermissions(menus: any[]) {
    for (const menu of menus) {
      if (menu.type !== 3) {
        _recurseGetPermissions(menu.children ?? [])
      } else {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermissions(userMenu)
  return permissions
}

// 获取所有子叶节点Id，也就是获取用户所拥有的菜单列表中不能再分的菜单的id(因为没有type为3的菜单，所以为获取type为2的菜单id)
export function mapMenusToLeafKeys(userMenu: any) {
  const leafKeys: number[] = []
  function _recurseLeafKeys(userMenu: any) {
    for (const menu of userMenu) {
      if (menu.children) {
        _recurseLeafKeys(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseLeafKeys(userMenu)
  return leafKeys
}

// 获取用户所拥有的菜单类表
export function mapMenusToMenuUrl(userMenu: any) {
  const leafKeys: number[] = []
  function _recurseLeafKeys(userMenu: any) {
    for (const menu of userMenu) {
      if (menu.children) {
        _recurseLeafKeys(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseLeafKeys(userMenu)
  return leafKeys
}

export { firstPath }
