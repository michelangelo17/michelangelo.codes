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
  @media (min-width: 1024px) {
    margin: 15px auto;
  }
`
const ContactContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    padding: 20px;
    margin: 20px 20px 30px;
  }
  @media (min-width: 1024px) {
    margin: 20px;
  }
`
const ContactH2 = styled(H2)`
  @media (min-width: 768px) {
    margin: 80px 10px 10px;
  }
  @media (min-width: 1024px) {
    margin: 15px;
  }
`
const FooterContainer = styled(FlexContainer)`
  @media (min-width: 1024px) {
    padding: 20px;
  }
`

const Contact = () => (
  <>
    <FlexContainer minh='calc(100vh - 90px)' p='10px' fdc mainColor>
      <ContactH2 asc m='15px'>
        Contact Me
      </ContactH2>
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
    </FlexContainer>
    <FooterContainer as='footer' w='100%' p='0 0 80px' fdc>
      <P m='0 auto' as='small' fs='1.2rem'>
        © 2020 Michelangelo Markus
      </P>
    </FooterContainer>
  </>
)

export default Contact
