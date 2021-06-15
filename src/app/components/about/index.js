import React from 'react'
import { FlexContainer, Text, BasicImg } from '../../emotionalThings/EmoTools'
import styled from '@emotion/styled/macro'
import me from './me.jpg'

const AboutContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    margin: 0px auto;
    max-width: 1100px;
  }
  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`

const Span = styled.span`
  display: inline-block;
  margin: 5px 10px;
  border: 2px solid #436282;
  padding: 5px;
  border-radius: 5px;
  @media (min-width: 768px) {
    margin: 10px;
  }
`

const AboutIntroP = styled(Text)`
  @media (min-width: 768px) {
    margin: 50px 10px;
  }
`
const AboutH2 = styled(Text)`
  @media (min-width: 768px) {
    margin: 80px 10px 10px;
  }
  @media (min-width: 1024px) {
    margin: 15px;
  }
`

const About = () => (
  <AboutContainer minh='100vh' p='10px 0 70px 0' fdc>
    <AboutH2 as='h2' fw='bold' h2 asc m='15px'>
      About Me
    </AboutH2>
    <BasicImg src={me} alt='Hello' w='40%' maxw='250px' br='50%' asc />
    <AboutIntroP as='p' lh='1.25' m='10px 15px'>
      Hello! I'm Michelangelo, a Solutions Architect for AWS. This is my site
      with little side projects and things I do to amuse myself, most of it is
      old, but I will endevour to update this more in the future. (Some links
      are also definitely broken, I'll fix them someday.) Any thoughts or
      opinons expressed here are my own.
    </AboutIntroP>
    <Text as='h3' fw='bold' h3 m='10px 15px'>
      Some of my favourite tools and languages are:
    </Text>
    <Text as='p' lh='1.25' m='5px'>
      <Span>Amazon Web Services </Span>
      <Span>JavaScript </Span>
      <Span>Python </Span>
      <Span>SQL </Span>
      <Span>NodeJS </Span>
      <Span>Express</Span>
      <Span>PostgreSQL </Span>
      <Span>Linux </Span>
      <Span>React </Span>
      <Span>Redux </Span>
      <Span>React Router </Span>
      <Span>Emotion </Span>
      <Span>Styled Components </Span>
    </Text>
  </AboutContainer>
)

export default About
