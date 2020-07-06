import styled from '@emotion/styled/macro'
import WebFont from 'webfontloader'
import styledMap from 'styled-map'
import { NavLink, Link } from 'react-router-dom'

WebFont.load({
  google: {
    families: ['Oxygen'],
  },
})

export const styleVariables = {
  mainFontColor: '#22282e',
  mainFontFamily: `'Oxygen', 'sans-serif'`,
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.1)',
}

//set main background colour
document.body.style.backgroundColor = styleVariables.mainBackgroundColor

const fontSizeMap = styledMap`
  h1: 2.2rem;
  h2: 2rem;
  h3: 1.6rem;
  small: 1rem;
  p: 1.2rem;
`

const flexDirectionMap = styledMap`
  fdc: column;
  fdr: row;
`
const justifyContentMap = styledMap`
  jcsb: space-between;
  jcc: center;
  jcfs: flex-start;
`
const alignItemsMap = styledMap`
  aic: center;
  aifs: flex-start;
`

const alignSelfMap = styledMap`
  asc: center;
  auto: auto;
`

const boxShadowMap = styledMap`
  bs: ${styleVariables.boxShadow};
  default: null;
`

const textDecorationMap = styledMap`
  ul: underline;
  default: none;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${flexDirectionMap};
  justify-content: ${justifyContentMap};
  align-items: ${alignItemsMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  background-color: ${(props) => props.bgcolor};
  background-image: url(${(props) => props.bgimg});
  background-position: ${(props) => props.bgpos};
  background-size: ${(props) => props.bgsize};
  border-radius: ${(props) => props.br};
  box-shadow: ${boxShadowMap};
  z-index: ${(props) => props.z};
  position: ${(props) => props.pos || 'relative'};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  text-decoration: ${(props) => props.td};
`

export const BasicImg = styled.img`
  width: ${(props) => props.w};
  margin: ${(props) => props.m};
`

export const Text = styled.div`
  align-self: ${alignSelfMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  font-size: ${(props) => props.fs || fontSizeMap};
  color: ${(props) => props.color || styleVariables.mainFontColor};
  font-family: ${(props) => props.ff || styleVariables.mainFontFamily};
  font-weight: ${(props) => props.fw};
  text-align: ${(props) => props.ta};
  text-decoration: ${textDecorationMap};
  line-height: ${(props) => props.lh};
`

export const A = styled.a`
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  color: ${(props) => props.color || styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-size: ${(props) => props.fs || fontSizeMap};
  font-weight: ${(props) => props.bold};
  text-decoration: ${(props) => props.textdec || 'none'};
  border: none;
  &:hover {
    filter: brightness(0.9);
  }
`
export const EmoNavLink = styled(NavLink)`
  color: ${(props) => props.color || styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-size: ${(props) => props.fs || fontSizeMap};
  font-weight: ${(props) => props.bold};
  text-decoration: ${(props) => props.textdec || 'none'};
  border: none;
  &:hover {
    filter: brightness(0.9);
  }
`
export const EmoLink = styled(Link)`
  display: flex;
  flex-direction: ${flexDirectionMap};
  justify-content: ${justifyContentMap};
  box-shadow: ${boxShadowMap};
  border: ${(props) => props.border};
  order: ${(props) => props.order};
  &:hover {
    filter: brightness(0.9);
  }
`
