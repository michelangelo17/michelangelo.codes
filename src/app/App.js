import React from 'react'
import Splash from './components/splash'
import EmoGlobal from './emotionalThings/EmoGlobal'
import Menu from './components/menu'
import About from './components/about'

const App = () => {
  return (
    <>
      <EmoGlobal />
      <Menu />
      <Splash />
      <About />
    </>
  )
}

export default App
