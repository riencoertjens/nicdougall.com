import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Hero, Section, Container } from '../components/webhart-components'
import GatsbyImage from 'gatsby-image'
import css from '@emotion/css'
import LogoSVG from '../images/logo.svg'
import { colors, ButtonGatsbyLink } from '../site/styles'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero
      color={colors.blue}
      css={css`
        padding: 0;
        justify-content: flex-start;
      `}
    >
      <GatsbyImage
        fluid={data.headerImage.childImageSharp.fluid}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <div
        css={css`
          h1,
          p,
          img {
            margin: 0.5rem;
          }
          padding-top: 5rem;
          background: rgba(255, 255, 255, 0.5);
          width: 100%;
          position: relative;
          :after {
            content: ' ';
            display: block;
            background: linear-gradient(rgba(255, 255, 255, 0.5), transparent);
            width: 100%;
            position: absolute;
            height: 100px;
          }
        `}
      >
        <img src={LogoSVG} height={75} alt="logo" />
        <h1>Nicolas Dougall</h1>
        <p>{data.site.siteMetadata.siteTagline}</p>
      </div>
    </Hero>
    <Section background={colors.blue} color="white">
      <Container>
        <h2
          css={css`
            color: ${colors.yellow};
          `}
        >
          the transition
        </h2>
        <p>
          I’m really excited to announce that I’ll be returning to triathlon, a
          sport I’ve always been passionate about, for 2019 and hopefully
          beyond. Cycling has given me a lot and I’ll always be thankful for my
          time in the peloton, racing with some of the greatest athletes and
          mates I’ve ever met, but I’m excited to chase personal success in the
          sport of triathlon.
        </p>
        <ButtonGatsbyLink border to="/about">
          read more
        </ButtonGatsbyLink>
      </Container>
    </Section>
    <Section color="black" background="whitesmoke">
      <Container>
        <h2
          css={css`
            color: ${colors.blue};
          `}
        >
          blog
        </h2>
        <p>
          I’m really excited to announce that I’ll be returning to triathlon, a
          sport I’ve always been passionate about, for 2019 and hopefully
          beyond. Cycling has given me a lot and I’ll always be thankful for my
          time in the peloton, racing with some of the greatest athletes and
          mates I’ve ever met, but I’m excited to chase personal success in the
          sport of triathlon.
        </p>
        <ButtonGatsbyLink to="/blog">read blog</ButtonGatsbyLink>
      </Container>
    </Section>
    <Section background={colors.yellow} color="black">
      <Container>
        <h2
          css={css`
            color: ${colors.blue};
          `}
        >
          calendar
        </h2>
        <p>
          I’m really excited to announce that I’ll be returning to triathlon, a
          sport I’ve always been passionate about, for 2019 and hopefully
          beyond. Cycling has given me a lot and I’ll always be thankful for my
          time in the peloton, racing with some of the greatest athletes and
          mates I’ve ever met, but I’m excited to chase personal success in the
          sport of triathlon.
        </p>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        siteTitle
        siteTagline
        siteDescription
      }
    }
    headerImage: file(base: { eq: "nic-on-bike.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
