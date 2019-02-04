import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'

import { Global, css } from '@emotion/core'
import { globalStyle, colors } from './../site/styles'
import SEO from './webhart-components/SEO'
import GatsbyLink from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

// import { ReactComponent as Logo } from '../images/logo.svg'
import LogoSVG from '../images/logo.svg'
import LogoNegSVG from '../images/logo-neg.svg'

import { FaInstagram as InstagramIcon } from 'react-icons/fa'
import { FaTwitter as TwitterIcon } from 'react-icons/fa'
import { FaFacebookF as FacebookIcon } from 'react-icons/fa'
import { pxToRem } from './webhart-components'

const Layout = ({ children }) => (
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
          <GatsbyLink
            css={css`
              height: ${pxToRem(50)};
              width: ${pxToRem(50)};
              display: block;
              padding: 0.3rem;
              img {
                margin-right: auto;
                height: 100%;
              }
            `}
            to="/"
          >
            <img src={LogoNegSVG} alt="logo" />
          </GatsbyLink>
          <nav
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              a {
                color: ${colors.yellow};
                text-decoration: none;
                margin: 1rem;
              }
            `}
          >
            <GatsbyLink to="/">home</GatsbyLink>
            <GatsbyLink to="/about">about</GatsbyLink>
            <GatsbyLink to="/partners">partners</GatsbyLink>
            <GatsbyLink to="/blog">blog</GatsbyLink>
            <GatsbyLink to="/calendar">calendar</GatsbyLink>
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
            <OutboundLink
              target="_blank"
              href={`https://instagram.com/${data.site.siteMetadata.instagram}`}
            >
              <InstagramIcon />
            </OutboundLink>
            <OutboundLink
              target="_blank"
              href={`https://twitter.com/${data.site.siteMetadata.twitter}`}
            >
              <TwitterIcon />
            </OutboundLink>
            <OutboundLink
              target="_blank"
              href={`https://facebook.com/${data.site.siteMetadata.facebook}`}
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
