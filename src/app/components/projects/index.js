import React from 'react'
import { Outlet } from 'react-router-dom'
import { FlexContainer } from '../../emotionalThings/EmoTools'

const Projects = () => (
  <FlexContainer jcc>
    <Outlet />
  </FlexContainer>
)

export default Projects
