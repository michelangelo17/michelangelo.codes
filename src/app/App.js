import React from 'react'
import Splash from './components/splash'
import EmoGlobal from './emotionalThings/EmoGlobal'
import Menu from './components/menu'
import About from './components/about'
import Contact from './components/contact'

const App = () => {
  return (
    <>
      <EmoGlobal />
      <Menu />
      <Splash />
      <About />
      <Contact />
    </>
  )
}

export default App
