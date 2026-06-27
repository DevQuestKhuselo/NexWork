import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LandingPage from './pages/LandingPage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  {path:"/", element: <LandingPage />},
  {path:"/register", element: <Register />},
  {path:"/login", element: <Login />},
  {/*path:"/clientdashboard", element: <ClientDashboard />},
  {path:"/freelancerdashboard", element: <FreelancerDashboard />*/}

  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
