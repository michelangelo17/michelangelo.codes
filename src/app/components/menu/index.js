import React from 'react'
import { FlexContainer, Button } from '../../emotionalThings/EmoTools'

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
    p='0 10px 0 10px'
    z={999}
  >
    <Button bgcolor='rgba(46, 49, 49, .0)' bold='500'>
      Home
    </Button>
    <Button bgcolor='rgba(46, 49, 49, .0)' bold='500'>
      About
    </Button>
    <Button bgcolor='rgba(46, 49, 49, .0)' bold='500'>
      Portfolio
    </Button>
    <Button bgcolor='rgba(46, 49, 49, .0)' bold='500'>
      Contact
    </Button>
  </FlexContainer>
)

export default Menu
