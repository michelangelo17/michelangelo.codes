import React from 'react'
import { FlexContainer, H1, H2 } from '../../emotionalThings/EmoTools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import background from './background.jpg'

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
        id='home'
      >
        <H1 m={`${trueHeight / 2}px 0 0 0`} color='#f0f0f0' p='0 0 5px 0'>
          Michelangelo Markus
        </H1>
        <H2 color='#f0f0f0'>Software Developer</H2>
        <FlexContainer aife h='100%' p='20px'>
          <a href='/#about'>
            <FontAwesomeIcon icon={faChevronDown} size='5x' color='#f0f0f0' />
          </a>
        </FlexContainer>
      </FlexContainer>
    </>
  )
}
export default Splash
