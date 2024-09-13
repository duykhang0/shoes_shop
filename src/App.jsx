import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutMaster from "./pageMaster/LayoutMaster"
import HomePage from './pages/HomePage';
import SearchPages from './pages/SearchPages';
import DetailPage from './pages/DetailPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import Carts from "./pages/Carts";


function App() {

  return (  
    <BrowserRouter>
        <Routes>
          <Route path='' element={<LayoutMaster/>}>
              <Route index element={<HomePage/>}></Route>
              <Route path='search' element={<SearchPages/>}></Route>
              <Route path='detail' element={<DetailPage/>}></Route>
              <Route path='login' element={<LoginPage/>}></Route>
              <Route path='register' element={<RegisterPage/>}></Route>
              <Route path='profile' element={<ProfilePage/>}></Route>
              <Route path='carts' element={<Carts/>}></Route>
          </Route> 
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
