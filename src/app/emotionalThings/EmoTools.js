import styled from '@emotion/styled/macro'
import WebFont from 'webfontloader'
import styledMap from 'styled-map'
import { NavLink, Link } from 'react-router-dom'

WebFont.load({
  google: {
    families: ['Oxygen', 'Varela Round', 'Righteous', 'sans-serif'],
  },
})

export const styleVariables = {
  mainFontColor: '#22282e',
  mainBackgroundColor: '#FAFAFA',
  mainBrandColor: '#797564',
  secondaryFontColor: '#6e89a0',
  secondaryBackgroundColor: '#81a2a6',
  mainFontFamily: `'Oxygen', 'sans-serif'`,
  secondaryFontFamily: `'Varela Round', 'sans-serif'`,
  fontSizeH1: '2.2rem',
  fontSizeH2: '2rem',
  fontSizeH3: '1.6rem',
  fontSizeH4: null,
  fontSizeH5: null,
  fontSizeH6: null,
  fontSizeH7: null,
  fontSizeP: '1.2rem',
  fontSizeSmall: '1rem',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.1)',
}

//set main background colour
document.body.style.backgroundColor = styleVariables.mainBackgroundColor

const buttonColorMap = styledMap`
  primary: #08415C;
  success: #2CA58D;
  danger: #CC2936;
  warning: #F1BF98;
  info: #4D7EA8;
  secondary: #6B818C;
`

const flexDirectionMap = styledMap`
  fdcr: column-reverse;
  fdrr: row-reverse;
  fdc: column;
  fdr: row;
`
const justifyContentMap = styledMap`
  jcse: space-evenly;
  jcsa: space-around;
  jcsb: space-between;
  jcc: center;
  jcfe: flex-end;
  jcfs: flex-start;
`
const alignItemsMap = styledMap`
  aib: baseline;
  ais: stretch;
  aic: center;
  aife: flex-end;
  aifs: flex-start;
`
const alignContentMap = styledMap`
  acs: stretch;
  acse: space-evenly;
  acsa: space-around;
  acsb: space-between;
  acc: center;
  acfe: flex-end;
  acfs: flex-start;
`
const alignSelfMap = styledMap`
  asb: baseline;
  ass: stretch;
  asc: center;
  asfe: flex-end;
  asfs: flex-start;
  auto: auto;
`

const justifySelfMap = styledMap`
  jsst: stretch;
  jsc: center;
  jse: end;
  jss: start;
  auto: auto;
`

const colorMap = styledMap`
  white: white;
  secondaryColor: ${styleVariables.secondaryBackgroundColor};
  brandColor: ${styleVariables.mainBrandColor};
  mainColor: ${styleVariables.mainBackgroundColor};
  none: transparent;
`

const boxShadowMap = styledMap`
  bs: ${styleVariables.boxShadow};
  default: null;
`

const flexWrapMap = styledMap`
  fw: wrap;
  default: null;
`
const textDecorationMap = styledMap`
  lt: line-through;
  ul: underline;
  default: none;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${flexDirectionMap};
  justify-content: ${justifyContentMap};
  align-items: ${alignItemsMap};
  align-content: ${alignContentMap};
  align-self: ${alignSelfMap};
  justify-self: ${justifySelfMap};
  flex-wrap: ${flexWrapMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  background-color: ${(props) => props.bgcolor || colorMap};
  background-image: url(${(props) => props.bgimg});
  background-position: ${(props) => props.bgpos};
  background-repeat: ${(props) => props.bgrep};
  background-size: ${(props) => props.bgsize};
  border-radius: ${(props) => props.br};
  box-shadow: ${boxShadowMap};
  z-index: ${(props) => props.z};
  text-decoration: ${(props) => props.td};
  border: ${(props) => props.border};
  position: ${(props) => props.pos || 'relative'};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  text-align: ${(props) => props.ta};
`

export const BasicImg = styled.img`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.br};
`

export const H1 = styled.h1`
  align-self: ${alignSelfMap};
  justify-self: ${justifySelfMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  font-size: ${(props) => props.fs || styleVariables.fontSizeH1};
  color: ${(props) => props.color || styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: ${(props) => props.fw || 'bold'};
  text-align: ${(props) => props.ta};
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`
export const H2 = styled.h2`
  align-self: ${alignSelfMap};
  justify-self: ${justifySelfMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  font-size: ${(props) => props.fs || styleVariables.fontSizeH2};
  color: ${(props) => props.color || styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: ${(props) => props.fw || 'bold'};
  text-align: ${(props) => props.ta};
`
export const H3 = styled.h3`
  align-self: ${alignSelfMap};
  justify-self: ${justifySelfMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  font-size: ${(props) => props.fs || styleVariables.fontSizeH3};
  color: ${(props) => props.color || styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  font-weight: ${(props) => props.fw || 'bold'};
  text-align: ${(props) => props.ta};
`

export const P = styled.p`
  align-self: ${alignSelfMap};
  justify-self: ${justifySelfMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  font-size: ${(props) => props.fs || styleVariables.fontSizeP};
  color: ${(props) => props.color || styleVariables.mainFontColor};
  font-family: ${styleVariables.mainFontFamily};
  text-align: ${(props) => props.ta};
  text-decoration: ${textDecorationMap};
  line-height: 1.25;
`

export const Button = styled.button`
  align-self: ${alignSelfMap};
  justify-self: ${justifySelfMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  color: white;
  background-color: ${(props) => props.bgcolor || buttonColorMap};
  border-radius: ${(props) => props.br};
  font-size: ${(props) => props.fs || styleVariables.fontSizeSmall};
  font-weight: ${(props) => props.bold};
  border: none;
  &:hover {
    filter: brightness(0.9);
  }
`
export const TextInput = styled.input`
  align-self: ${alignSelfMap};
  justify-self: ${justifySelfMap};
  width: ${(props) => props.w};
  height: ${styleVariables.fontSizeP};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  font-size: ${(props) => props.fs || styleVariables.fontSizeSmall};
`
export const A = styled.a`
  align-self: ${alignSelfMap};
  justify-self: ${justifySelfMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  color: ${(props) => props.color || styleVariables.mainFontColor};
  background-color: ${(props) => props.bgcolor || colorMap};
  border-radius: ${(props) => props.br};
  font-family: ${styleVariables.mainFontFamily};
  font-size: ${(props) => props.fs || styleVariables.fontSizeP};
  font-weight: ${(props) => props.bold};
  text-decoration: ${(props) => props.textdec || 'none'};
  border: none;
  &:hover {
    filter: brightness(0.9);
  }
`
export const EmoNavLink = styled(NavLink)`
  align-self: ${alignSelfMap};
  justify-self: ${justifySelfMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  color: ${(props) => props.color || styleVariables.mainFontColor};
  background-color: ${(props) => props.bgcolor || colorMap};
  border-radius: ${(props) => props.br};
  font-family: ${styleVariables.mainFontFamily};
  font-size: ${(props) => props.fs || styleVariables.fontSizeP};
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
  align-items: ${alignItemsMap};
  align-content: ${alignContentMap};
  align-self: ${alignSelfMap};
  justify-self: ${justifySelfMap};
  flex-wrap: ${flexWrapMap};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  min-width: ${(props) => props.minw};
  max-width: ${(props) => props.maxw};
  min-height: ${(props) => props.minh};
  max-height: ${(props) => props.maxh};
  background-color: ${(props) => props.bgcolor || colorMap};
  background-image: url(${(props) => props.bgimg});
  background-position: ${(props) => props.bgpos};
  background-repeat: ${(props) => props.bgrep};
  background-size: ${(props) => props.bgsize};
  border-radius: ${(props) => props.br};
  box-shadow: ${boxShadowMap};
  z-index: ${(props) => props.z};
  text-decoration: ${(props) => props.td};
  border: ${(props) => props.border};
  position: ${(props) => props.pos || 'relative'};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  text-align: ${(props) => props.ta};
  order: ${(props) => props.order};
  &:hover {
    filter: brightness(0.9);
  }
`
