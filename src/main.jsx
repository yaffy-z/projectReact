import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Admin from '../src/components/admin/Admin.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppointmentList from './components/appointmentList/AppointmentList.jsx'
import ServicesBussinessList from './components/servicesBussinessList/ServicesBussinessList.jsx'
import Login from './components/login/Login.jsx'
import User from './components/user/User.jsx'
const isAdmin =true
const router = createBrowserRouter([
{
  path:'/',
  element:<User/>
},
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error admin</div>,
    children: [
      {
        path: 'meeting',
        element: <AppointmentList />,
        errorElement: <div>error not found</div>
      },
      {
        path: 'services',
        element:  <ServicesBussinessList  isAdmin={isAdmin}/>
      }]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
