import React from 'react'
import Splash from './components/splash'
import EmoGlobal from './emotionalThings/EmoGlobal'
import Menu from './components/menu'
import About from './components/about'
import Contact from './components/contact'
import Portfolio from './components/portfolio'

const App = () => {
  return (
    <>
      <EmoGlobal />
      <Menu />
      <Splash />
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
