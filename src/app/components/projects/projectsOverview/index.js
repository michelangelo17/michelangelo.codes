import React from 'react'
import {
  FlexContainer,
  Text,
  BasicImg,
  EmoLink,
} from '../../../emotionalThings/EmoTools'
import styled from '@emotion/styled/macro'
import fostertogether from '../screenshots/fostertogether.png'
import gameplay from '../screenshots/gameplay.png'
import friends from '../screenshots/friends.png'
import currency from '../screenshots/currency.png'

const ProjectsH2 = styled(Text)`
  @media (min-width: 768px) {
    margin: 80px 10px 70px;
  }
  @media (min-width: 1024px) {
    margin: 15px 0 70px;
  }
`

const ProjectLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(700px, 90%), 1fr));
  gap: 2rem;
  padding: 0 2rem;
`
const ChangeProjectOrder = styled(EmoLink)`
  @media (min-width: 1024px) {
    order: 3;
  }
`

const ProjectsOverview = () => (
  <FlexContainer minh='100vh' p='10px 0 70px 0' fdc aic>
    <ProjectsH2 as='h2' h2 fw='bold' asc m='15px'>
      My Projects
    </ProjectsH2>
    <ProjectLinksContainer fdc aic>
      <EmoLink order='1' border='10px solid white' jcc bs to='foster-together'>
        <BasicImg src={fostertogether} alt='Project Foster Together' w='100%' />
      </EmoLink>
      <EmoLink order='2' border='10px solid white' jcc bs to='ants-knapsack'>
        <BasicImg src={gameplay} alt="Project Ant's Knapsack" w='100%' />
      </EmoLink>
      <EmoLink order='4' border='10px solid white' jcc bs to='friends'>
        <BasicImg src={friends} alt='Project Friends' w='100%' />
      </EmoLink>
      <ChangeProjectOrder
        order='5'
        border='10px solid white'
        jcc
        bs
        to='simple-currency-exchange'
      >
        <BasicImg
          src={currency}
          alt='Project Simple Currency Exchange'
          w='100%'
        />
      </ChangeProjectOrder>
    </ProjectLinksContainer>
  </FlexContainer>
)

export default ProjectsOverview
