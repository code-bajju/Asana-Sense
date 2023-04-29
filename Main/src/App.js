import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home'
import Yoga from './pages/Yoga/Yoga'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Tutorials from './pages/Tutorials/Tutorials'
import Header from './pages/New Pages/Header'

import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        
        <Route path='/start' element={<Yoga />} />
        <Route path='/about' element={<Header />} />
        <Route path='/contact' element={<Header />} />
        <Route path='/tutorials' element={<Tutorials />} />
      </Routes>
    </Router>
  )
}


