import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Home = lazy(() => import('../presentation/screen/Home/Home'))

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Home />
      </Suspense>
    ),
    errorElement: <h1>Error</h1>
  },

  {
    path: '*',
    element: <h1>404</h1>
  }
])
