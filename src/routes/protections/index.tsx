import React, { lazy, useContext } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'
import { MockAuthContext } from '~/context/MockAuthContext'

const ProtectedRoute = () => {
  const { isLogin } = useContext(MockAuthContext)
  if (!isLogin) {
    return <>⛔</>
  }
  return <Outlet />
}

// リンク作成でも利用したいので、パスだけでなくリンクラベル（title）を持っておく
export const protectedRouteMap = new Map<{ path: string; title: string }, React.LazyExoticComponent<() => JSX.Element>>(
  [
    [{ path: 'child-a', title: 'Child A' }, lazy(() => import('~/routes/protections/child-a'))],
    [{ path: 'child-b', title: 'Child B' }, lazy(() => import('~/routes/protections/child-b'))],
    [{ path: 'child-c', title: 'Child C' }, lazy(() => import('~/routes/protections/child-c'))],
  ]
)

export const protectedRouteObject: RouteObject = {
  path: 'protections/',
  // ログインしている状態の時のみアクセスできるようにする
  element: <ProtectedRoute />,
  children: [
    {
      index: true,
      element: <Navigate to='/' replace />,
    },
    ...Array.from(protectedRouteMap, ([{ path }, ExoticComponent]) => ({
      path,
      element: <ExoticComponent />,
    })),
  ],
}
