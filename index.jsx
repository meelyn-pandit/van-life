import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, NavLink } from "react-router-dom"
import Home, { loader as homePageLoader } from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansPageLoader } from './pages/Vans';
// import Error from './pages/Error'
import Error from './components/Error'
import VanDetail from './pages/VanDetail'
import ProductDetail from './pages/ProductDetail';
import Layout from './components/Layout'
import "./server"
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostLayout from './components/HostLayout';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanInfo from './pages/Host/HostVanInfo';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}
                        errorElement={<Error />}>
          <Route index element={<Home />}
                       loader={homePageLoader} 
                       errorElement={<Error />}/>
          <Route path="/about" element={<About />} />

          <Route path="/vans">
            <Route index element={<Vans />}
                         loader={vansPageLoader} /> 
            <Route path=":id" element={<VanDetail />} />
          </Route>
          {/* <Route path="/products/:productId" element={<ProductDetail />} /> */}
          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} /> 
            <Route path="vans/:id" element={<HostVanDetail />} >
              <Route index element={<h2>Detailed info goes here</h2>} />
                <Route path="info" element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        <Route path="*" element={<Error />}/>
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);