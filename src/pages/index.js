import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import {
  Hero,
  Section,
  Container,
  ScrollArrow,
} from '../components/webhart-components'
import GatsbyImage from 'gatsby-image'
import css from '@emotion/css'
import LogoSVG from '../images/logo.svg'
import { colors, ButtonGatsbyLink } from '../site/styles'
import PostList from '../components/PostList'
import GatsbyLink from 'gatsby-link'

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
          position: relative;
          width: 100%;
          background: rgba(255, 255, 255, 0.5);
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
        <ScrollArrow
          headerSize={60}
          style={css`
            margin-top: auto;
          `}
        />
      </div>
    </Hero>
    <Section background={colors.blue}>
      <Container>
        <h2
          css={css`
            color: ${colors.yellow};
          `}
        >
          The Transition
        </h2>
        <p
          css={css`
            color: white;
          `}
        >
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
      <Container
        css={css`
          position: relative;
        `}
      >
        <h2
          css={css`
            color: ${colors.blue};
          `}
        >
          blog
        </h2>
        <PostList posts={data.posts} />
      </Container>
    </Section>
    <Section background={colors.yellow}>
      <Container>
        <h2
          css={css`
            color: ${colors.blue};
          `}
        >
          Partners
        </h2>
        <div
          css={css`
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin: 0 -1rem;
            flex-wrap: wrap;
            a {
              margin: 1rem;
              flex: 0 0 300px;
              text-align: center;
              color: ${colors.yellow};
              filter: grayscale(1) brightness(50%);
              &:hover {
                filter: saturate(1);
              }
            }
          `}
        >
          <GatsbyLink to="/partners#ventum">
            <GatsbyImage fluid={data.ventum.childImageSharp.fluid} />
          </GatsbyLink>
          <GatsbyLink to="/partners#hokaoneone">
            <GatsbyImage fluid={data.hokaoneone.childImageSharp.fluid} />
          </GatsbyLink>
          <GatsbyLink to="/partners#incrediwear">
            <GatsbyImage fluid={data.incrediwear.childImageSharp.fluid} />
          </GatsbyLink>
        </div>
        <>
          <ButtonGatsbyLink
            border
            alt
            to="/partners"
            css={css`
              margin: 0 auto;
            `}
          >
            more info
          </ButtonGatsbyLink>
        </>
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
      ...SEOImageFragment
    }
    posts: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "post" }
          featured: { eq: true }
          draft: { eq: false }
        }
      }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 3
    ) {
      edges {
        node {
          ...PostListFragment
        }
      }
    }
    ventum: file(base: { eq: "sponsor-ventum.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    hokaoneone: file(base: { eq: "sponsor-hokaoneone.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    incrediwear: file(base: { eq: "sponsor-incrediwear.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
