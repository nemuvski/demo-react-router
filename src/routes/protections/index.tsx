import React, { lazy, LazyExoticComponent, useContext } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'
import { MockAuthContext } from '~/context/MockAuthContext'

const ProtectedRoute = () => {
  const { isLogin } = useContext(MockAuthContext)
  // 未ログインであれば、アクセス禁止を表すコンテンツを表示する
  if (!isLogin) {
    return <>⛔</>
  }
  return <Outlet />
}

export const protectedRouteMap = new Map<string, LazyExoticComponent<() => JSX.Element>>([
  ['child-a', lazy(() => import('~/routes/protections/child-a'))],
  ['child-b', lazy(() => import('~/routes/protections/child-b'))],
  ['child-c', lazy(() => import('~/routes/protections/child-c'))],
])

export const protectedRouteObject: RouteObject = {
  path: 'protections/',
  // ログインしている状態の時のみアクセスできるようにする
  element: <ProtectedRoute />,
  children: [
    {
      index: true,
      element: <Navigate to='/' replace />,
    },
    ...Array.from(protectedRouteMap, ([path, ExoticComponent]) => ({
      path,
      element: <ExoticComponent />,
    })),
  ],
}
