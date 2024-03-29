import React from 'react'
import { FlexContainer, Text } from '../../emotionalThings/EmoTools'
import background from './background.jpg'
import styled from '@emotion/styled/macro'

const H1 = styled(Text)`
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`
const H2 = styled(Text)`
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`

const Splash = () => {
  const trueHeight = window.innerHeight

  return (
    <>
      <FlexContainer
        aic
        fdc
        h={`${trueHeight}px`}
        w='100vw'
        bgimg={background}
        bgsize='cover'
        bgpos='center'
      >
        <H1
          as='h1'
          h1
          m={`${trueHeight / 1.8}px 0 0 0`}
          color='#f0f0f0'
          p='0 0 5px 0'
          fw='bold'
        >
          Michelangelo Codes LLC
        </H1>
        <H2 as='h2' h2 fw='bold' color='#f0f0f0'>
          Coming soon!
        </H2>
      </FlexContainer>
    </>
  )
}
export default Splash
