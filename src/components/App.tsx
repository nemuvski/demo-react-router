import React, { Suspense, lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Layout from '~/components/Layout'
import { examplesRoute } from '~/routes/examples'

const FrontPage = lazy(() => import('~/routes'))

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        examplesRoute,
        {
          index: true,
          element: <FrontPage />,
        },
        {
          path: '*',
          element: <Navigate to='/' replace />,
        },
      ],
    },
  ])

  return <Suspense fallback={<div>Loading</div>}>{routes}</Suspense>
}

export default App
