import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

// リンク作成でも利用したいので、パスだけでなくリンクラベル（title）を持っておく
export const hideAndSeekRouteMap = new Map<
  { path: string; title: string },
  React.LazyExoticComponent<() => JSX.Element>
>([
  [{ path: 'child-a', title: 'Child A' }, lazy(() => import('~/routes/hide-and-seek/child-a'))],
  [{ path: 'child-b', title: 'Child B' }, lazy(() => import('~/routes/hide-and-seek/child-b'))],
  [{ path: 'child-c', title: 'Child C' }, lazy(() => import('~/routes/hide-and-seek/child-c'))],
])

export const hideAndSeekRouteObject: RouteObject = {
  path: 'hide-and-seek/',
  children: [
    {
      index: true,
      element: <Navigate to='/' replace />,
    },
    ...Array.from(hideAndSeekRouteMap, ([{ path }, ExoticComponent]) => ({
      path,
      element: <ExoticComponent />,
    })),
  ],
}
