import React from 'react'
import css from '@emotion/css'

import {
  Section,
  Container,
  Columns,
  Column,
  mediaQueryGT,
} from './webhart-components'
import { colors } from '../site/styles'
import ImageSlider from './slider'

const SplitPaneSection = ({
  reverse,
  images,
  children,
  name,
  background,
  customStyle,
}) => {
  return (
    <Section
      name={name}
      background={background}
      css={css`
        padding: 0;
        position: relative;
        blockquote span {
          color: ${colors.yellow};
        }
        ${reverse
          ? `
          color: white;
          a,
          h2 {
            color: ${colors.yellow};
          }
        `
          : `
          a,
          h2,
          blockquote span{
            color: ${colors.blue};
          }`}
      `}
    >
      <Container>
        <Columns
          css={css`
            ${reverse &&
              `
              flex-direction: row-reverse;
            `}
            ${Column} {
              padding: 5rem 0;
            }
          `}
        >
          <Column
            css={css`
              height: 50vh;
            `}
          >
            <div
              css={css`
                position: absolute;
                top: 0;
                ${reverse
                  ? `
                right: 0;`
                  : `left: 0;`}
                width: 100%;
                height: 50vh;
                ${mediaQueryGT['tablet']} {
                  width: 50%;
                  height: 100%;
                }
                .gatsby-image-wrapper {
                  width: 100%;
                  height: 100%;
                }
              `}
            >
              <ImageSlider images={images} />
            </div>
          </Column>
          <Column
            css={css`
              /* text-align: center; */
              p {
                text-align: left;
              }
              h2 {
                margin-bottom: 0.5rem;
              }
              h2,
              h3 {
                line-height: 1;
              }
              ${mediaQueryGT['tablet']} {
                text-align: left;
              }
            `}
          >
            {children}
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export default SplitPaneSection
