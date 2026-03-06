import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import SignIn from './pages/SignIn'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/sign-in' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
