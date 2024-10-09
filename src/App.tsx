import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout";
import Profile from "./pages/Profile";

function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route index path='/' element={<Home />} />
                  <Route index path='/profile' element={<Profile />} />
              </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
