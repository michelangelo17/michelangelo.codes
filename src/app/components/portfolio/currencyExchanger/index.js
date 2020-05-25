import React from 'react'
import { BasicImg, A } from '../../../emotionalThings/EmoTools'
import currency from './currency.png'
import { SiteContainer, PortfolioH3, PortfolioP } from '../emoPortfolio'

const C = () => (
  <SiteContainer m='20px 0' h='100%' minh='90%' p='10px' fdc mainColor w='95%'>
    <PortfolioH3 asc>Simple Currency Exchange</PortfolioH3>
    <PortfolioP p='10px 0'>
      A Progressive Web Application built with React. Installable on mobile,
      displays as normal app in app list. Automatically pulls the latest rates
      any time it's used online and stores them locally, enabling offline use.
      Will also attempt to autodetect country location and set that currency as
      the inital.
    </PortfolioP>
    <PortfolioP p='10px 0'>
      Key Contributions: App fully built by me.
    </PortfolioP>
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

export default C
