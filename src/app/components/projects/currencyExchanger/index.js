import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import currency from '../screenshots/currency.png'
import { SiteContainer, ProjectsH3, ProjectsP } from '../emoProjects'

const SimpleCurrencyExchange = () => (
  <SiteContainer
    m='20px auto'
    h='100%'
    minh='90%'
    p='10px'
    fdc
    mainColor
    w='95%'
  >
    <ProjectsH3 asc>Simple Currency Exchange</ProjectsH3>
    <ProjectsP p='10px 0'>
      A Progressive Web Application built with React. Installable on mobile,
      displays as a normal app in phone app list. Automatically pulls the latest
      rates any time it's used online and stores them locally, enabling offline
      use. Will also attempt to autodetect country location by IP address to
      select initial currency.
    </ProjectsP>
    <ProjectsP p='10px 0'>Key Contributions: App fully built by me.</ProjectsP>
    <A
      m='0 auto'
      p='10px 0 20px'
      href='https://github.com/michelangelo17/currency-rate-finder/tree/master'
      textdec='underline'
    >
      View code on GitHub
    </A>
    <A href='https://currencyrateexchange.now.sh/'>
      <BasicImg src={currency} w='100%' />
    </A>
  </SiteContainer>
)

export default SimpleCurrencyExchange
