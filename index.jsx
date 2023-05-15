import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/vans">
            <Route index element={<Vans />} /> 
            <Route path=":id" element={<VanDetail />} />
          </Route>
          {/* <Route path="/products/:productId" element={<ProductDetail />} /> */}
          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);