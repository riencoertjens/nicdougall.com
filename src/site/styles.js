import css from '@emotion/css'
import styled from '@emotion/styled'

import 'typeface-raleway'
import 'typeface-montserrat'

import { mediaQueries, baseFontSize } from '../components/webhart-components'
import GatsbyLink from 'gatsby-link'

export const typographySettings = {
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  scaleRatio: 2.5,
  headerFontFamily: ['Raleway', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'serif'],
}

export const colors = {
  blue: '#0B2952',
  yellow: '#F0AB25',
}

export const fonts = {
  body: `'Montserrat', sans-serif`,
  title: `'Raleway', sans-serif`,
}

export const globalStyle = css`
  ${'' /* ${normalize} */}

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    ${mediaQueries({
      fontSize: baseFontSize,
    })}
    box-sizing: border-box;
    ${'' /* line-height: ${lineHeight}rem;
    font-family: ${fonts.body}; */}
    ${'' /* color: ${colors.grijs}; */}
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

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
