import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import gameplay from '../screenshots/gameplay.png'
import { SiteContainer, ProjectsH3, ProjectsP } from '../emoProjects'

const AntsKnapsack = () => (
  <SiteContainer
    m='20px auto'
    h='100%'
    minh='90%'
    p='10px'
    fdc
    mainColor
    w='95%'
  >
    <ProjectsH3 asc> The Ant's Knapsack</ProjectsH3>
    <ProjectsP p='10px 0'>
      Worked as a front end developer on this multiplayer online video game
      using vanilla JS, HTML, CSS and the animation library PixiJS. Socket.IO
      used for all backend requests.
    </ProjectsP>
    <ProjectsP p='10px 0'>
      Key Contributions: Map, ant movement and animation, room changes, store
      logic.
    </ProjectsP>
    <A
      m='0 auto'
      p='10px 0 20px'
      href='https://github.com/Organization-for-CS-Build-Week-1/PIXI-client'
      textdec='underline'
    >
      View code on GitHub
    </A>
    <A href='https://the-ants-knapsack.netlify.app'>
      <BasicImg src={gameplay} w='100%' />
    </A>
  </SiteContainer>
)

export default AntsKnapsack
