import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import gameplay from '../screenshots/gameplay.png'
import { SiteContainer, ProjectsH3, ProjectsP, Bold } from '../emoProjects'

const AntsKnapsack = () => (
  <SiteContainer h='100%' fdc w='95%' minh='100vh' p='10px 0 70px 0'>
    <ProjectsH3 as='h3' h3 fw='bold' asc>
      {' '}
      The Ant's Knapsack
    </ProjectsH3>
    <A
      m='0 auto'
      p='10px 0 20px'
      href='https://github.com/Organization-for-CS-Build-Week-1/PIXI-client'
      textdec='underline'
    >
      View code on GitHub
    </A>
    <A
      m='0 auto'
      p='10px 0 20px'
      textdec='underline'
      href='https://the-ants-knapsack.netlify.app'
    >
      Deployed Site
    </A>
    <ProjectsP as='p' lh='1.25' p='10px 0'>
      This is a multiplayer online game built in a week with a team of five
      developers. I focused almost exclusively on the front end which was built
      with vanilla Javascript, the PixiJS library and communicated with the
      Flask backend using SocketIO. It's based loosly on the classic Knapsack
      Problem. In it players can play as an ant through a generated map, moving
      from room to room in an attempt to get the most valuable combination of
      items under their weight limit. There is a basic real time chat for any
      players in the same room, a scoreboard and a store. Give it a try!
    </ProjectsP>
    <ProjectsP as='p' lh='1.25' p='10px 0'>
      <Bold>Key Contributions:</Bold> Map, ant movement and animation, room
      changes, store logic.
    </ProjectsP>
    <ProjectsP as='p' lh='1.25' p='10px 0'>
      <Bold>Stack:</Bold> HTML, CSS, JavaScript, PixiJS, SocketIO, Netlify.
    </ProjectsP>
    <BasicImg src={gameplay} w='100%' alt="Ant's Knapsack Gameplay Image" />
  </SiteContainer>
)

export default AntsKnapsack
