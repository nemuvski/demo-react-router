import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

export const examplesMap = new Map<{ path: string; title: string }, React.LazyExoticComponent<() => JSX.Element>>([
  [{ path: 'child-a', title: 'Child A' }, lazy(() => import('~/routes/examples/child-a'))],
  [{ path: 'child-b', title: 'Child B' }, lazy(() => import('~/routes/examples/child-b'))],
  [{ path: 'child-c', title: 'Child C' }, lazy(() => import('~/routes/examples/child-c'))],
])

export const examplesRoute: RouteObject = {
  path: 'examples/',
  children: [
    {
      index: true,
      element: <Navigate to='/' replace />,
    },
    ...Array.from(examplesMap, ([{ path }, ExoticComponent]) => ({
      path,
      element: <ExoticComponent />,
    })),
  ],
}
