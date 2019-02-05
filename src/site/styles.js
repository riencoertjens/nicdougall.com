import css from '@emotion/css'
import styled from '@emotion/styled'

// BreakPoints,
// siteGlobalStyle,
// useTypography,
// responsiveFontSizes,
// fontFamilies,

import 'typeface-raleway'
import 'typeface-montserrat'

// import { mediaQueries } from '../components/webhart-components'
import GatsbyLink from 'gatsby-link'

export const lineHeight = '1.5'
export const spacing = 1.5

export const DefaultPaddingX = '1rem'
export const DefaultPaddingY = 0

export const BreakPoints = ['600px', '900px', '1200px', '1600px']

export const baseFontSize = 16
export const responsiveFontSizes = ['14px', '16px', '16px', '16px', '18px']

export const colors = {
  blue: '#0B2952',
  yellow: '#F0AB25',
}

export const fonts = {
  body: ['Montserrat', 'sans-serif'],
  title: ['Raleway', 'sans-serif'],
}
export const fontFamilies = {
  title: fonts.title.join(', '),
  body: fonts.body.join(', '),
}

export const useTypography = true
export const typographySettings = {
  baseFontSize: baseFontSize[2],
  baseLineHeight: lineHeight,
  scaleRatio: 2.5,
  headerFontFamily: fonts.title,
  bodyFontFamily: fonts.body,
}

export const siteGlobalStyle = css`
  blockquote {
    font-style: italic;
    span {
      font-style: normal;
      font-weight: 600;
    }
  }
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;
  border: 2px solid;
  border-color: ${colors.blue};
  background: ${colors.blue};
  color: ${colors.yellow};
  display: inline-block;
  width: auto;
  height: auto;
  &:hover {
    color: ${colors.blue};
    background: ${colors.yellow};
    border-color: ${colors.yellow};
  }
  ${props => props.border && `border-color: ${colors.yellow};`}

  ${props =>
    props.alt &&
    `
      background: ${colors.yellow};
      color: ${colors.blue};
      border-color: ${props.border ? colors.blue : colors.yellow};
      &:hover {
        border-color: ${colors.blue};
        color: ${colors.yellow};
        background: ${colors.blue};
      }
    `}
`

export const ButtonLink = Button.withComponent('a')
export const ButtonGatsbyLink = Button.withComponent(GatsbyLink)
