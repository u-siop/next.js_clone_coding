import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import NewPost from './Component/NewPost'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/create-post', element: <NewPost /> }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
