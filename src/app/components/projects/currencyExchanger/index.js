import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import currency from '../screenshots/currency.png'
import { SiteContainer, ProjectsH3, ProjectsP, Bold } from '../emoProjects'

const SimpleCurrencyExchange = () => (
  <SiteContainer h='100%' fdc w='95%' minh='100vh' p='10px 0 70px 0'>
    <ProjectsH3 asc>Simple Currency Exchange</ProjectsH3>
    <A
      m='0 auto'
      p='10px 0 20px'
      href='https://github.com/michelangelo17/currency-rate-finder/tree/master'
      textdec='underline'
    >
      View code on GitHub
    </A>
    <A
      m='0 auto'
      p='10px 0 20px'
      textdec='underline'
      href='https://currencyrateexchange.now.sh/'
    >
      Deployed Site
    </A>
    <ProjectsP p='10px 0'>
      A side project built mostly in a day for a client in Switzerland who
      needed a basic offline currency exchange app for their phone. A
      Progressive Web Application built with React. Installable on mobile,
      displays as a normal app in phone app list. Automatically pulls the latest
      rates any time it's used online and stores them locally, enabling offline
      use. Will also attempt to autodetect country location by IP address to
      select initial currency. Works great on Android or in a browser, feel free
      to use it on your next trip!
    </ProjectsP>
    <ProjectsP p='10px 0'>
      <Bold>Key Contributions:</Bold> App fully built by me.
    </ProjectsP>
    <ProjectsP m='10px 0'>
      <Bold>Stack:</Bold> React, Redux, SASS/SCSS, exchangerate-api.com, iapi.co
    </ProjectsP>
    <BasicImg src={currency} w='100%' m='10px 0 0' />
  </SiteContainer>
)

export default SimpleCurrencyExchange
