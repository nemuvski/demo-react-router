import React, { lazy, LazyExoticComponent } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

export const hideAndSeekRouteMap = new Map<string, LazyExoticComponent<() => JSX.Element>>([
  ['child-a', lazy(() => import('~/routes/hide-and-seek/child-a'))],
  ['child-b', lazy(() => import('~/routes/hide-and-seek/child-b'))],
  ['child-c', lazy(() => import('~/routes/hide-and-seek/child-c'))],
])

export const hideAndSeekRouteObject: RouteObject = {
  path: 'hide-and-seek/',
  children: [
    {
      index: true,
      element: <Navigate to='/' replace />,
    },
    ...Array.from(hideAndSeekRouteMap, ([path, ExoticComponent]) => ({
      path,
      element: <ExoticComponent />,
    })),
  ],
}
