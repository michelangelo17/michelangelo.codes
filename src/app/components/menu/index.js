import React from 'react'
import { FlexContainer, EmoNavLink } from '../../emotionalThings/EmoTools'
import styled from '@emotion/styled/macro'

const MenuContainer = styled(FlexContainer)`
  bottom: 0;
  @media (min-width: 768px) {
    justify-content: space-around;
    padding: 0;
    top: 0;
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
    <EmoNavLink to='/' color='white' bold='600'>
      Home
    </EmoNavLink>
    <EmoNavLink to='about' color='white' bold='600'>
      About
    </EmoNavLink>
    <EmoNavLink to='projects' color='white' bold='600'>
      Projects
    </EmoNavLink>
    <EmoNavLink to='contact' color='white' bold='600'>
      Contact
    </EmoNavLink>
  </MenuContainer>
)
export default Menu
