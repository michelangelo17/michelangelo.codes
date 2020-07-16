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
      Hello! I'm Michelangelo, a software developer specializing in full stack
      web development. Originally from Portland, OR. Formally a Computer Science
      Teacher in Cambodia. Presently working remotely as a Team Lead for Lambda,
      Inc from Brooklyn, NY.
    </AboutIntroP>
    <Text as='h3' fw='bold' h3 m='10px 15px'>
      Some of my favourite tools and languages are:
    </Text>
    <Text as='p' lh='1.25' m='5px'>
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
      <Span>Amazon Web Services </Span>
      <Span>Styled Components </Span>
    </Text>
    <Text as='h3' fw='bold' h3 m='10px 15px'>
      Some things I'm currently studying:
    </Text>
    <Text as='p' lh='1.25' m='5px'>
      <Span>TypeScript </Span>
      <Span>AWS Certification </Span>
    </Text>
    <Text as='h3' fw='bold' h3 m='10px 15px'>
      Next up:
    </Text>
    <Text as='p' lh='1.25' m='5px'>
      <Span>Django </Span>
      <Span>Go </Span>
      <Span>Rust </Span>
      <Span>Azure </Span>
      <Span>Google Cloud </Span>
    </Text>
  </AboutContainer>
)

export default About
