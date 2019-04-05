import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'

import { Global, css } from '@emotion/core'
import { colors, Button } from './../site/styles'
import SEO from './webhart-components/SEO'
import GatsbyLink from 'gatsby-link'

import { Spin as Hamburger } from 'react-burgers'

// import LogoSVG from '../images/logo.svg'
import LogoNegSVG from '../images/logo-neg.svg'

import { FaInstagram as InstagramIcon } from 'react-icons/fa'
import { FaTwitter as TwitterIcon } from 'react-icons/fa'
import { FaFacebookF as FacebookIcon } from 'react-icons/fa'
import {
  pxToRem,
  mediaQueryGT,
  OutboundLink,
  Section,
  Container,
  Columns,
  Column,
  globalStyle,
} from './webhart-components'

import { EventsList } from '../pages/calendar'
import Obfuscate from 'react-obfuscate'

const SocialLinks = ({ instagram, facebook, twitter, style }) => (
  <>
    {instagram && (
      <OutboundLink
        aria-label="instagram"
        href={`https://instagram.com/${instagram}`}
        css={style}
      >
        <InstagramIcon />
      </OutboundLink>
    )}
    {twitter && (
      <OutboundLink
        aria-label="twitter"
        href={`https://twitter.com/${twitter}`}
        css={style}
      >
        <TwitterIcon />
      </OutboundLink>
    )}
    {facebook && (
      <OutboundLink
        aria-label="facebook"
        href={`https://facebook.com/${facebook}`}
        css={style}
      >
        <FacebookIcon />
      </OutboundLink>
    )}
  </>
)

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false,
    }
  }
  render() {
    const { children, isCalendarPage } = this.props
    const { menuActive } = this.state
    const showCalendar = isCalendarPage || this.state.showCalendar
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                instagram: instagramUsername
                twitter: twitterUsername
                facebook: facebookPage
              }
            }
            events: markdownRemark(
              frontmatter: { templateKey: { eq: "calendar-page" } }
            ) {
              ...EventsListFragment
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
                {/* <GatsbyLink
                  onClick={() => this.setState({ menuActive: false })}
                  to="/calendar"
                >
                  calendar
                </GatsbyLink> */}
              </nav>
              <div
                css={css`
                  display: flex;
                  align-items: flex-end;
                  justify-content: flex-end;
                  a {
                    text-align: center;
                    display: block;
                    color: ${colors.yellow};
                    font-size: 1.5rem;
                    margin: 0 0.25rem;
                    line-height: 0;
                    width: 2rem;
                  }
                `}
              >
                <SocialLinks {...data.site.siteMetadata} />
              </div>
            </header>
            <main>{children}</main>
            <Section
              as="footer"
              background={colors.blue}
              css={css`
                color: white;

                h2,
                a {
                  color: ${colors.yellow};
                }
              `}
            >
              <Container>
                <Columns>
                  <Column>
                    <h2>Calendar</h2>

                    <EventsList
                      events={data.events.frontmatter.events}
                      limit={!showCalendar && 2}
                    />

                    {!isCalendarPage &&
                      data.events.frontmatter.events.length > 2 && (
                        <Button
                          border
                          css={css`
                            margin-bottom: 2rem;
                          `}
                          onClick={() =>
                            this.setState({ showCalendar: !showCalendar })
                          }
                        >
                          {showCalendar ? 'hide' : 'show all'}
                        </Button>
                      )}
                  </Column>
                  <Column
                    css={css`
                      h3 {
                        margin-bottom: 0.75rem;
                      }
                    `}
                  >
                    <h2>Stay in the loop</h2>
                    <h3
                      css={css`
                        span {
                          display: block;
                        }
                      `}
                    >
                      follow me
                    </h3>
                    <SocialLinks
                      style={css`
                        font-size: 1.5rem;
                        margin-right: 1rem;
                        margin-bottom: 1rem;
                        display: inline-block;
                      `}
                      {...data.site.siteMetadata}
                    />
                    <h3>get in touch</h3>
                    <p
                      css={css`
                        a {
                          text-align: left;
                          width: 100%;
                        }
                      `}
                    >
                      <Obfuscate email="ndougall92@gmail.com" />
                      <br />
                      <Obfuscate tel="+1(650) 454-6751" />
                    </p>
                  </Column>
                </Columns>
              </Container>
              <span
                css={css`
                  margin-bottom: -3rem;
                  display: block;
                  background: ${colors.yellow};
                  text-align: center;
                  color: black;
                  line-height: 1;
                  padding: 0.5rem;
                  font-size: ${pxToRem(14)};
                  a {
                    color: ${colors.blue};
                    text-decoration: none;
                  }
                `}
              >
                &copy; {new Date().getFullYear()} Nicolas Dougall | site by{' '}
                <OutboundLink href="https://www.web-hart.com">
                  WEB-hart
                </OutboundLink>
              </span>
            </Section>
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
