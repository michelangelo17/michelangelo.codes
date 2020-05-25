import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import gameplay from './gameplay.png'
import { SiteContainer, PortfolioH3, PortfolioP } from '../emoPortfolio'

const AK = () => (
  <SiteContainer m='20px 0' h='100%' minh='90%' p='10px' fdc mainColor w='95%'>
    <PortfolioH3 asc> The Ant's Knapsack</PortfolioH3>
    <PortfolioP p='10px 0'>
      Worked as a front end developer on this multiplayer online video game
      using vanilla JS, HTML, CSS and the animation library PixiJS. Socket.IO
      used for all backend requests.
    </PortfolioP>
    <PortfolioP p='10px 0'>
      Key Contributions: Map, ant movement and animation, room changes, store
      logic.
    </PortfolioP>
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

export default AK
