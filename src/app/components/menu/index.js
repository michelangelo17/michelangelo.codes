import React from 'react'
import { FlexContainer, A } from '../../emotionalThings/EmoTools'
import styled from '@emotion/styled/macro'

const MenuContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    justify-content: space-around;
    padding: 0;
  }
  @media (min-width: 1024px) {
    width: 400px;
    right: 0;
    margin-right: -3px;
    margin-top: -3px;
    border-radius: 5px;
  }
`

const Menu = () => (
  <MenuContainer
    as='nav'
    pos='fixed'
    w='100vw'
    h='60px'
    fdr
    jcsb
    bgcolor='rgba(46, 49, 49, .7)'
    aic
    p='0 15px 0 15px'
    z={999}
  >
    <A href='/#home' color='white' bold='600'>
      Home
    </A>
    <A href='/#about' color='white' bold='600'>
      About
    </A>
    <A href='/#portfolio' color='white' bold='600'>
      Portfolio
    </A>
    <A href='/#contact' color='white' bold='600'>
      Contact
    </A>
  </MenuContainer>
)
export default Menu
