import css from '@emotion/css'
import normalize from '../components/webhart/normalize'

import 'typeface-poppins'
import 'typeface-raleway'

const baseFontSize = '16'
const lineHeight = '1.5'
const spacing = '1.5'

export const globalStyle = css`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: ${(baseFontSize / 16) * 100}%; // 100% = 16px
    line-height: ${lineHeight}em;
    font-family: 'Raleway', sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    ${'' /* border: 1px solid black; */}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins';
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${lineHeight};
    margin-top: 0;
    margin-bottom: ${spacing}rem;
  }
`
