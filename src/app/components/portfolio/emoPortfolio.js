import styled from '@emotion/styled/macro'
import { FlexContainer, P, H3 } from '../../emotionalThings/EmoTools'

export const SiteContainer = styled(FlexContainer)`
  @media (min-width: 768px) {
    padding: 40px;
    margin: 25px 0;
    max-width: 1200px;
  }
`

export const PortfolioP = styled(P)`
  @media (min-width: 768px) {
    margin: 10px;
  }
`
export const PortfolioH3 = styled(H3)`
  @media (min-width: 768px) {
    margin: 10px 0 20px;
  }
`
