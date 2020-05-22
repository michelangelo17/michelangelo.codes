import React from 'react'
import { FlexContainer, H1, H2 } from '../../emotionalThings/EmoTools'
import background from './background.jpg'

const Splash = () => {
  const trueHeight = window.innerHeight

  return (
    <FlexContainer
      aic
      fdc
      h={`${trueHeight}px`}
      w='100vw'
      bgimg={background}
      bgsize='cover'
      bgpos='center'
    >
      <H1 m={`${trueHeight / 2}px 0 0 0`} color='#f0f0f0' p='0 0 5px 0'>
        Michelangelo Markus
      </H1>
      <H2 color='#f0f0f0'>Software Developer</H2>
    </FlexContainer>
  )
}
export default Splash
