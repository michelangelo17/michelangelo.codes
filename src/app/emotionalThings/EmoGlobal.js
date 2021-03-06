import React from 'react'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'

const EmoGlobal = () => (
  <Global
    styles={css`
      ${emotionReset}
      *, *::after, *::before {
        font-size: 62.5%;
        box-sizing: border-box;
        scroll-behavior: smooth; /*need to move into breakpoint*/
      }
    `}
  />
)

export default EmoGlobal
