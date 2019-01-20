// import React from 'react'

import { css } from '@emotion/core'
import styled from '@emotion/styled'

import facepaint from 'facepaint'

export const DefaultPaddingX = '1rem'
export const DefaultPaddingY = 0

export const BreakPoints = ['600px', '900px', '1200px', '1800px']

export const breakpoints = {
  narrow: ['100%', BreakPoints[0], BreakPoints[0], BreakPoints[0]],
  normal: ['100%', BreakPoints[0], BreakPoints[1], BreakPoints[2]],
  wide: ['100%', '100%', '100%', BreakPoints[2]],
  superWide: ['100%', '100%', '100%', '100%', BreakPoints[3]],
}

export const mediaQuery = BreakPoints.map(bp => `@media (min-width: ${bp})`)

export const mediaQueryGT = {
  mobile: `@media (min-width: ${BreakPoints[0]})`,
  tablet: `@media (min-width: ${BreakPoints[1]})`,
  desktop: `@media (min-width: ${BreakPoints[2]})`,
  wideScreen: `@media (min-width: ${BreakPoints[3]})`,
}
export const mediaQueryLT = {
  mobile: `@media (max-width: ${BreakPoints[0]})`,
  tablet: `@media (max-width: ${BreakPoints[1]})`,
  desktop: `@media (max-width: ${BreakPoints[2]})`,
  wideScreen: `@media (max-width: ${BreakPoints[3]})`,
}

export const mediaQueries = facepaint(
  BreakPoints.map((bp, i) => {
    return `@media (min-width: ${bp})`
  })
)

export const ContainerBreakPoints = props =>
  css(
    mediaQueries({
      width: props.width ? breakpoints[props.width] : breakpoints['normal'],
      padding: `${DefaultPaddingY} ${DefaultPaddingX}`,
      margin: '0 auto',
    })
  )

export const Section = styled.section`
  padding: 2rem 0;
`
export const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
export const Column = styled.div`
  padding: 0;
  margin: ${DefaultPaddingY} ${DefaultPaddingX};
  flex: 1 1 300px;
`

export const Container = styled.div`
  padding: ${DefaultPaddingY} ${DefaultPaddingX};
  ${ContainerBreakPoints}
  ${Columns} {
    margin-left: -${DefaultPaddingX};
    margin-right: -${DefaultPaddingX};
  }
`

export const Hero = styled.section`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
