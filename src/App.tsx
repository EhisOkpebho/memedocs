import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout";
import Profile from "./pages/Profile";
import Commands from "./pages/Commands";
import StockManagement from './pages/StockManagement';
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route index path='/' element={<Home />} />
                  <Route index path='/auth/login' element={<Login />} />
                  <Route index path='/auth/signup' element={<Registration />} />
                  <Route index path='/profile' element={<Profile />} />
                  <Route index path='/commands' element={<Commands />} />
                  <Route index path='/stock' element={<StockManagement />} />
              </Routes>
          </Layout>
      </BrowserRouter>
  )
}

export default App;
