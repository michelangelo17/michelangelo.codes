import React from 'react'
import { H2, FlexContainer, P } from '../../emotionalThings/EmoTools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled/macro'

const ContactGroupContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    width: 550px;
    margin: 40px auto;
    padding: 20px;
  }
`
const ContactContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    padding: 20px;
    margin: 20px 20px 30px;
  }
`

const Contact = () => (
  <FlexContainer minh='100vh' p='70px 0 100px 0' id='contact' fdc mainColor>
    <H2 asc m='10px'>
      Contact Me
    </H2>
    <ContactGroupContainer fdc aic w='100%'>
      <ContactContainer
        as='a'
        href='mailto:m@michelangelo.codes'
        p='10px'
        td='none'
        bs
        br='5px'
        m='10px 10px 15px'
        w='90%'
        jcsb
      >
        <FontAwesomeIcon icon={faEnvelope} size='4x' color='#f46658' />
        <P asc ta='center' w='80%'>
          m@michelangelo.codes
        </P>
      </ContactContainer>
      <ContactContainer
        as='a'
        href='https://www.linkedin.com/in/michelangelo-markus'
        p='10px'
        td='none'
        bs
        br='5px'
        m='15px 10px'
        w='90%'
        jcsb
      >
        <FontAwesomeIcon icon={faLinkedin} size='4x' color='#2867b2' />
        <P asc ta='center' w='80%'>
          /in/michelangelo-markus
        </P>
      </ContactContainer>
      <ContactContainer
        as='a'
        href='https://github.com/michelangelo17'
        p='10px'
        td='none'
        bs
        br='5px'
        m='15px 10px'
        w='90%'
        jcsb
      >
        <FontAwesomeIcon icon={faGithub} size='4x' color='#333' />
        <P asc ta='center' w='80%'>
          michelangelo17
        </P>
      </ContactContainer>
      <ContactContainer
        as='a'
        href='https://twitter.com/devmichelangelo'
        p='10px'
        td='none'
        bs
        br='5px'
        m='15px 10px 10px'
        w='90%'
        jcsb
      >
        <FontAwesomeIcon icon={faTwitter} size='4x' color='#00aced' />
        <P asc ta='center' w='80%'>
          @devmichelangelo
        </P>
      </ContactContainer>
    </ContactGroupContainer>
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
