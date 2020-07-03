import styled from '@emotion/styled/macro'
import { FlexContainer, P, H3 } from '../../emotionalThings/EmoTools'

export const SiteContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    margin: 80px 10px 70px;
    align-self: center;
    max-width: 1200px;
  }
  @media (min-width: 1024px) {
    margin: 15px 0 70px;
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
export const Bold = styled.span`
  font-weight: bold;
`
