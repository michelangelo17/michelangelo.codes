import React from 'react'
import { FlexContainer, P, H2, H3, Span } from '../../emotionalThings/EmoTools'

const About = () => (
  <FlexContainer minh='100vh' p='50px 0 0 0' id='about' fdc>
    <H2 asc m='10px'>
      About Me
    </H2>
    <P m='10px'>
      Hello! I am a software developer specializing in full stack web
      development. Originally from Portland, OR. Formally a Computer Science
      Teacher in Cambodia. Presently located in Brooklyn, NY, working remotely
      as a Team Lead for Lambda, Inc.
    </P>
    <H3 m='10px'>Some of my favourite tools and languages are:</H3>
    <P m='5px'>
      <Span>• JavaScript</Span>
      <Span>• Python </Span>
      <Span>• SQL </Span>
      <Span>• NodeJS </Span>
      <Span>• PostgreSQL </Span>
      <Span>• Amazon Web Services </Span>
      <Span>• Linux </Span>
      <Span>• React </Span>
      <Span>• Redux </Span>
      <Span>• ReactRouter </Span>
      <Span>• EmotionJS </Span>
      <Span>• StyledComponents</Span>
    </P>
    <H3 m='10px'>Some things I'm currently studying:</H3>
    <P m='5px'>
      <Span>• AWS DevOps Certification </Span>
      <Span>• C </Span>
      <Span>• Django </Span>
    </P>
    <H3 m='10px'>Next up:</H3>
    <P m='5px'>
      <Span>• TypeScript </Span>
      <Span>• Go </Span>
      <Span>• Rust </Span>
      <Span>• Azure </Span>
      <Span>• Google Cloud </Span>
    </P>
  </FlexContainer>
)

export default About
