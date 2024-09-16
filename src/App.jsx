import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import AboutSection from './components/About'
import SubSection from './components/Subsidaries'
import ProductSection from './components/Products'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <AboutSection></AboutSection>
        <SubSection></SubSection>
        <ProductSection></ProductSection>
        <Footer></Footer>
      </div>
    )
  }
}

export default App