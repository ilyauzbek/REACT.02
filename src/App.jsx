import React from 'react'
import './App.css'
import Card from './components/Card/Card'
import About from './components/About/About'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Wrapper from './components/Wrapper/Wrapper'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
      <Card />
      <About/>
      <Footer/>
      <Header/>
      <Hero/>
      <Wrapper/>
    </>
  )
}

export default App