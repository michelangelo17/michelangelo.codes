import React from 'react'
import Splash from './components/splash'
import EmoGlobal from './emotionalThings/EmoGlobal'
import Menu from './components/menu'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import { Routes, Route } from 'react-router-dom'
import Friends from './components/projects/friends'
import ProjectsOverview from './components/projects/projectsOverview/index'
import FosterTogether from './components/projects/fosterTogether'
import AntsKnapsack from './components/projects/antsKnapsack'
import SimpleCurrencyExchange from './components/projects/currencyExchanger'

const App = () => {
  return (
    <>
      <EmoGlobal />
      {/* <Menu /> */}
      <Routes>
        <Route path='/' element={<Splash />} />
        {/* <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />}>
          <Route path='/' element={<ProjectsOverview />} />
          <Route path='foster-together' element={<FosterTogether />} />
          <Route path='ants-knapsack' element={<AntsKnapsack />} />
          <Route path='friends' element={<Friends />} />
          <Route
            path='simple-currency-exchange'
            element={<SimpleCurrencyExchange />}
          />
        </Route> */}
        {/* <Route path='contact' element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
