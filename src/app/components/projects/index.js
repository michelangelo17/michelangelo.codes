import React from 'react'
import { FlexContainer, H2 } from '../../emotionalThings/EmoTools'
import AK from './antsKnapsack'
import FT from './fosterTogether'
import F from './friends'
import C from './currencyExchanger'
import styled from '@emotion/styled/macro'

const ProjectsContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    padding: 70px 20px 40px;
  }
`

const Projects = () => (
  <ProjectsContainer
    minh='100vh'
    p='70px 0 40px 0'
    id='projects'
    fdc
    aic
    bgcolor='#436282'
  >
    <H2 asc m='10px' color='white'>
      My Projects
    </H2>
    <FT />
    <AK />
    <F />
    <C />
  </ProjectsContainer>
)

export default Projects
