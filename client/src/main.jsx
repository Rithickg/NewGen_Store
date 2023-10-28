import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import { GlobalStyles } from './styles/Global.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
