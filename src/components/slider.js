import React, { Component } from 'react'
import { graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import css from '@emotion/css'
import styled from '@emotion/styled-base'

import { ReactComponent as PrevIcon } from '../images/icons/prev.svg'
import { ReactComponent as NextIcon } from '../images/icons/next.svg'
import { colors } from '../site/styles'

const Pager = styled('button')`
  position: absolute;
  display: inline-block;
  top: 50%;
  margin-top: -20px;
  z-index: 1;
  border: none;
  padding-bottom: 0;
  background: none;
  line-height: 0;
  ${props => (props.next ? `right: 0;` : `left: 0;`)}
`

class ImageSlider extends Component {
  constructor(props) {
    super(props)
    this.state = { activeImage: 0 }
  }
  render() {
    const images = this.props.images.edges
    const activeImage = this.state.activeImage
    return (
      <div>
        {images.length > 1 && (
          <Pager
            onClick={() =>
              this.setState({
                activeImage:
                  activeImage == 0 ? images.length - 1 : activeImage - 1,
              })
            }
          >
            <PrevIcon />
          </Pager>
        )}
        {images.map(({ node: { base, childImageSharp: { fluid } } }, i) => (
          <GatsbyImage
            key={i}
            css={css`
              transition: 0.5s;
              position: absolute;
              opacity: ${this.state.activeImage == i ? '1' : '0'};
            `}
            fluid={fluid}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          />
        ))}
        {images.length > 1 && (
          <Pager
            next
            onClick={() =>
              this.setState({
                activeImage:
                  activeImage == images.length - 1 ? 0 : activeImage + 1,
              })
            }
          >
            <NextIcon />
          </Pager>
        )}
        <div
          css={css`
            position: absolute;
            bottom: 0;
            width: 100%;
            display: flex;
            justify-content: center;
          `}
        >
          {images.length > 1 &&
            images.map((image, i) => (
              <button
                key={i}
                onClick={() => this.setState({ activeImage: i })}
                css={css`
                  border-radius: 50%;
                  padding: 0;
                  border: 3px solid ${colors.yellow};
                  width: 12px;
                  height: 12px;
                  margin: 10px 5px;
                  background: ${colors.yellow};
                  box-shadow: 0 0 5px 0 black;
                  cursor: pointer;
                  outline: 0;
                  transition: 0.3s;
                  ${activeImage == i &&
                    `
                      background: ${colors.blue};
                    `};
                `}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default ImageSlider

export const ImageSliderFragment = graphql`
  fragment ImageSliderFragment on File {
    base
    childImageSharp {
      fluid(maxWidth: 900) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`
