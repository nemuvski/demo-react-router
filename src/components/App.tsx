import React, { Suspense, lazy, useContext } from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '~/components/Layout'
import { protectedRouteObject } from '~/routes/protections'
import { MockAuthContext } from '~/context/MockAuthContext'
import { hideAndSeekRouteObject } from '~/routes/hide-and-seek'

const FrontPage = lazy(() => import('~/routes'))

const App = () => {
  const { isLogin } = useContext(MockAuthContext)

  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        protectedRouteObject,
        // ログインしてる場合のみ、パスを設定（未ログインの時はNotFoundコンテンツを表示）
        isLogin ? hideAndSeekRouteObject : {},
        {
          index: true,
          element: <FrontPage />,
        },
        {
          path: '*',
          element: <>Not Found</>,
        },
      ],
    },
  ])

  return <Suspense fallback={<div>Loading</div>}>{routes}</Suspense>
}

export default App
