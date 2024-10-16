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
import {Provider} from "react-redux";
import store from "./redux/store";
import Orders from "./pages/Orders";
import AddOrder from "./pages/AddOrder";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Layout>
                  <Routes>
                      <Route index path='/' element={<Home />} />
                      <Route index path='/auth/login' element={<Login />} />
                      <Route index path='/auth/signup' element={<Registration />} />
                      <Route index path='/profile' element={<Profile />} />
                      <Route index path='/commands' element={<Commands />} />
                      <Route index path='/stock' element={<StockManagement />} />
                      <Route index path='/orders' element={<Orders />} />
                      <Route index path='/orders/add' element={<AddOrder />} />
                  </Routes>
              </Layout>
          </BrowserRouter>
      </Provider>
  )
}

export default App;
