import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, redirect, NavLink } from "react-router-dom"
import Home, { loader as homePageLoader } from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansPageLoader } from './pages/Vans';
// import Error from './pages/Error'
import Error from './components/Error'
import VanDetail, {loader as vanDetailLoader } from './pages/VanDetail'
import ProductDetail from './pages/ProductDetail';
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans, { loader as hostVanLoader } from './pages/Host/HostVans';
import HostLayout from './components/HostLayout';
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/Host/HostVanDetail';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanInfo from './pages/Host/HostVanInfo';
import Login from './pages/Login';
import AuthRequired from './components/AuthRequired';
import { requireAuth } from './utils';

import "./server"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}
                        errorElement={<Error />}>
          <Route index element={<Home />}
                       loader={homePageLoader}
                       errorElement={<Error />}/>
          <Route element={<AuthRequired />}>
            <Route path="protected"
                  element={<h1>Super secret info here</h1>}
                  loader={async () => {
                    const isLoggedIn = false
                    if(!isLoggedIn) {
                      throw redirect("/login")
                    }
                    return null
                  }} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route
            path="login"
            element={<Login />}
            />
          <Route path="/vans">
            <Route index element={<Vans />}
                         loader={vansPageLoader} /> 
            <Route path=":id" 
                   element={<VanDetail />} 
                   loader={vanDetailLoader}/>
          </Route>
          {/* <Route path="/products/:productId" element={<ProductDetail />} /> */}
          <Route path="host" 
                 element={<HostLayout />} 
                 >
            <Route 
              index element={<Dashboard />}
              loader={async () => await requireAuth()}
               />
            <Route 
              path="vans"
              element={<HostVans />} 
              loader={hostVanLoader}
               />
            <Route
              path="income"
              element={<Income />}
              loader={async () => await requireAuth()}/>
            <Route
              path="reviews" 
              element={<Reviews />} 
              loader={async () => await requireAuth()} /> 
            <Route path="vans/:id" 
                   element={<HostVanDetail/>} 
                   loader={hostVanDetailLoader} 
                     >
              <Route index element={<h2>Detailed info goes here</h2>} />
                <Route 
                  path="info" 
                  element={<HostVanInfo />} 
                  loader={async () => await requireAuth()} />
                <Route 
                  path="pricing" 
                  element={<HostVanPricing />} 
                  loader={async () => await requireAuth()} />
                <Route 
                  path="photos" 
                  element={<HostVanPhotos />}
                  loader={async () => await requireAuth()} />
            </Route>
          </Route>
        <Route path="*" element={<Error />}/>
        </Route>
      </>
    )
  )

  function Login() {
    return (
      <>
        <h1>Login page goes here</h1>
      </>
    )
  }

  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);