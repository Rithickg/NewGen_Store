import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import { GlobalStyles } from './styles/Global.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ProductPage } from './components/ProductPage.jsx'
import { store } from './globalState/store.jsx'
import { Provider } from 'react-redux'
import { Counter } from './globalState/features/counter/Counter.jsx'


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:productId',
    element: <ProductPage />
  },
  {
    path: '/counter',
    element: <Counter />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
