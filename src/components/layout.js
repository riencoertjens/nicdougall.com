import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'

import { Global, css } from '@emotion/core'
import { globalStyle, colors } from './../site/styles'
import SEO from './webhart-components/SEO'
import GatsbyLink from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Spin as Hamburger } from 'react-burgers'

// import LogoSVG from '../images/logo.svg'
import LogoNegSVG from '../images/logo-neg.svg'

import { FaInstagram as InstagramIcon } from 'react-icons/fa'
import { FaTwitter as TwitterIcon } from 'react-icons/fa'
import { FaFacebookF as FacebookIcon } from 'react-icons/fa'
import { pxToRem, mediaQueryGT } from './webhart-components'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false,
    }
  }
  render() {
    const { children } = this.props
    const { menuActive } = this.state
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title: siteTitle
                instagram: instagramUsername
                twitter: twitterUsername
                facebook: facebookPage
              }
            }
          }
        `}
        render={data => (
          <>
            <Global styles={globalStyle} />
            <SEO />
            <header
              css={css`
                position: fixed;
                width: 100%;
                z-index: 10;
                background: ${colors.blue};
                color: ${colors.yellow};
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 3px solid ${colors.yellow};
                & > * {
                  flex: 1;
                }
              `}
            >
              <div
                css={css`
                  && {
                    ${mediaQueryGT['mobile']} {
                      display: none;
                    }
                    z-index: 9999;
                  }
                `}
              >
                <Hamburger
                  width={35}
                  lineHeight={3}
                  lineSpacing={7}
                  color={colors.yellow}
                  borderRadius={0}
                  padding={'15px 10px 10px'}
                  active={menuActive}
                  onClick={() => this.setState({ menuActive: !menuActive })}
                  aria-label="menu toggle"
                />
              </div>
              <GatsbyLink
                css={css`
                  height: ${pxToRem(50)};
                  width: ${pxToRem(50)};
                  display: block;
                  padding: 0.3rem;
                  text-align: center;
                  ${mediaQueryGT['mobile']} {
                    text-align: left;
                    margin-right: auto;
                  }
                  img {
                    height: 100%;
                  }
                `}
                to="/"
                onClick={() => this.setState({ menuActive: false })}
              >
                <img src={LogoNegSVG} alt="logo" />
              </GatsbyLink>
              <nav
                css={css`
                  transition: 0.2s;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: absolute;
                  flex-direction: column;
                  top: 100vh;
                  ${menuActive &&
                    `top: ${pxToRem(66)};
                    `}
                  left: 0;
                  width: 100vw;
                  height: calc(100vh - ${pxToRem(66)});
                  background: ${colors.blue};
                  font-size: 1.5rem;
                  ${mediaQueryGT['mobile']} {
                    font-size: 1rem;
                    position: relative;
                    flex-direction: row;
                    top: 0;
                    height: auto;
                    width: auto;
                  }

                  a {
                    color: ${colors.yellow};
                    text-decoration: none;
                    margin: 1rem;
                  }
                `}
              >
                <GatsbyLink
                  onClick={() => this.setState({ menuActive: false })}
                  to="/"
                >
                  home
                </GatsbyLink>
                <GatsbyLink
                  onClick={() => this.setState({ menuActive: false })}
                  to="/about"
                >
                  about
                </GatsbyLink>
                <GatsbyLink
                  onClick={() => this.setState({ menuActive: false })}
                  to="/partners"
                >
                  partners
                </GatsbyLink>
                <GatsbyLink
                  onClick={() => this.setState({ menuActive: false })}
                  to="/blog"
                >
                  blog
                </GatsbyLink>
                <GatsbyLink
                  onClick={() => this.setState({ menuActive: false })}
                  to="/calendar"
                >
                  calendar
                </GatsbyLink>
              </nav>
              <div
                css={css`
                  display: flex;
                  align-items: flex-end;
                  a {
                    display: block;
                    color: ${colors.yellow};
                    font-size: 1.5rem;
                    margin: 0 0.25rem;
                    line-height: 0;
                    width: 2rem;
                    &:first-child {
                      margin-left: auto;
                    }
                  }
                `}
              >
                {/* social links */}
                <OutboundLink
                  aria-label="instagram"
                  target="_blank"
                  href={`https://instagram.com/${
                    data.site.siteMetadata.instagram
                  }`}
                >
                  <InstagramIcon />
                </OutboundLink>
                <OutboundLink
                  aria-label="twitter"
                  target="_blank"
                  href={`https://twitter.com/${data.site.siteMetadata.twitter}`}
                >
                  <TwitterIcon />
                </OutboundLink>
                <OutboundLink
                  aria-label="facebook"
                  target="_blank"
                  href={`https://facebook.com/${
                    data.site.siteMetadata.facebook
                  }`}
                >
                  <FacebookIcon />
                </OutboundLink>
              </div>
            </header>
            <main>{children}</main>
            {/* <Footer /> */}
          </>
        )}
      />
    )
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
