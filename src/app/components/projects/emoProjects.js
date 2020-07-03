import styled from '@emotion/styled/macro'
import { FlexContainer, P, H3 } from '../../emotionalThings/EmoTools'

export const SiteContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    padding: 40px;
    margin: 25px auto;
    max-width: 1200px;
  }
`

export const ProjectsP = styled(P)`
  @media (min-width: 768px) {
    margin: 10px;
  }
`
export const ProjectsH3 = styled(H3)`
  @media (min-width: 768px) {
    margin: 10px 0 20px;
  }
`
