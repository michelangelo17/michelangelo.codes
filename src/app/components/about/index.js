import React from 'react'
import { FlexContainer, P, H2, H3 } from '../../emotionalThings/EmoTools'
import styled from '@emotion/styled/macro'

const AboutContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    margin: 0px auto;
    max-width: 1100px;
  }
`
const AboutP = styled(P)`
  @media (min-width: 768px) {
    margin: 20px;
    text-align: left;
    margin: 20px 0;
  }
`

const Span = styled.span`
  display: inline-block;
  margin: 5px 10px;
  border: 2px solid #436282;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  @media (min-width: 768px) {
    margin: 10px;
  }
`

const AboutIntroP = styled(P)`
  @media (min-width: 768px) {
    margin: 50px 10px;
  }
`

const About = () => (
  <AboutContainer minh='100vh' p='70px 0 0 0' id='about' fdc mainColor>
    <H2 asc m='10px'>
      About Me
    </H2>
    <AboutIntroP m='10px'>
      Hello! I am a software developer specializing in full stack web
      development. Originally from Portland, OR. Formally a Computer Science
      Teacher in Cambodia. Presently working remotely as a Team Lead for Lambda,
      Inc from Brooklyn, NY.
    </AboutIntroP>
    <H3 m='10px'>Some of my favourite tools and languages are:</H3>
    <AboutP m='5px'>
      <Span>JavaScript </Span>
      <Span>Python </Span>
      <Span>SQL </Span>
      <Span>NodeJS </Span>
      <Span>Express</Span>
      <Span>PostgreSQL </Span>
      <Span>Amazon Web Services </Span>
      <Span>Linux </Span>
      <Span>React </Span>
      <Span>Redux </Span>
      <Span>React Router </Span>
      <Span>Emotion </Span>
      <Span>Styled Components </Span>
    </AboutP>
    <H3 m='10px'>Some things I'm currently studying:</H3>
    <AboutP m='5px'>
      <Span>TypeScript </Span>
      <Span>AWS Certification </Span>
    </AboutP>
    <H3 m='10px'>Next up:</H3>
    <AboutP m='5px'>
      <Span>Django </Span>
      <Span>Go </Span>
      <Span>Rust </Span>
      <Span>Azure </Span>
      <Span>Google Cloud </Span>
    </AboutP>
  </AboutContainer>
)

export default About
