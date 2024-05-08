import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import HeroHeader from './components/hero/HeroHeader'
import UserList from './pages/UserList'


function App() {
  
  return (
      <BrowserRouter>
          <NavLink to='/home'>
            <Header/>
            <HeroHeader/>
            <Home/>
          </NavLink>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/userlist' element={<UserList/>}/>
            {/* <Route path='/home' element={}/>
            <Route path='/home' element={}/> */}
          </Routes>
      </BrowserRouter>
  )
}

export default App
