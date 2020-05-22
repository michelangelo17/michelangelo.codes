import React from 'react'
import { FlexContainer, EmoNavLink } from '../../emotionalThings/EmoTools'

const Menu = () => (
  <FlexContainer
    as='menu'
    pos='fixed'
    w='100vw'
    h='40px'
    fdr
    jcsb
    bgcolor='rgba(46, 49, 49, .7)'
    aic
    p='0 15px 0 15px'
    z={999}
  >
    <EmoNavLink href='/#home' color='white' bold='600'>
      Home
    </EmoNavLink>
    <EmoNavLink href='/#about' color='white' bold='600'>
      About
    </EmoNavLink>
    <EmoNavLink href='/#portfolio' color='white' bold='600'>
      Portfolio
    </EmoNavLink>
    <EmoNavLink href='/#contact' color='white' bold='600'>
      Contact
    </EmoNavLink>
  </FlexContainer>
)

export default Menu
