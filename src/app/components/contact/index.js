import React from 'react'
import { H2, FlexContainer, P } from '../../emotionalThings/EmoTools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => (
  <FlexContainer minh='100vh' p='50px 0 0 0' id='contact' fdc>
    <H2 asc m='10px'>
      Contact Me
    </H2>
    <FlexContainer fdc aic w='100%'>
      <FlexContainer
        as='a'
        href='mailto:m@michelangelo.codes'
        p='10px'
        td='none'
        bs
        br='5px'
        m='10px'
        w='90%'
        jcsb
      >
        <FontAwesomeIcon icon={faPaperPlane} size='4x' color='#f46658' />
        <P asc ta='center' w='80%'>
          m@michelangelo.codes
        </P>
      </FlexContainer>
      <FlexContainer
        as='a'
        href='https://www.linkedin.com/in/michelangelo-markus'
        p='10px'
        td='none'
        bs
        br='5px'
        m='10px'
        w='90%'
        jcsb
      >
        <FontAwesomeIcon icon={faLinkedin} size='4x' color='#2867b2' />
        <P asc ta='center' w='80%'>
          /in/michelangelo-markus
        </P>
      </FlexContainer>
      <FlexContainer
        as='a'
        href='https://github.com/michelangelo17'
        p='10px'
        td='none'
        bs
        br='5px'
        m='10px'
        w='90%'
        jcsb
      >
        <FontAwesomeIcon icon={faGithub} size='4x' color='#333' />
        <P asc ta='center' w='80%'>
          michelangelo17
        </P>
      </FlexContainer>
      <FlexContainer
        as='a'
        href='https://twitter.com/devmichelangelo'
        p='10px'
        td='none'
        bs
        br='5px'
        m='10px'
        w='90%'
        jcsb
      >
        <FontAwesomeIcon icon={faTwitter} size='4x' color='#00aced' />
        <P asc ta='center' w='80%'>
          @devmichelangelo
        </P>
      </FlexContainer>
    </FlexContainer>
    <FlexContainer
      pos='absolute'
      as='footer'
      w='100%'
      p='0 0 60px 0'
      bottom='0'
      fdc
    >
      <P m='0 auto' as='small' fs='1.2rem'>
        © 2020 Michelangelo Markus
      </P>
    </FlexContainer>
  </FlexContainer>
)

export default Contact
