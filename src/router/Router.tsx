import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes'

export const Router = () => {
  return (
    <RouterProvider router={Routes} fallbackElement={<h1>Loading...</h1>} />
  )
}
