import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import {
  Hero,
  ScrollArrow,
  OutboundLink,
  Section,
  Container,
} from '../components/webhart-components'
import GatsbyImage from 'gatsby-image'
import css from '@emotion/css'
import { colors } from '../site/styles'
import SEO from '../components/webhart-components/SEO'
import SplitPaneSection from '../components/SplitPaneSection'
import Obfuscate from 'react-obfuscate'
import PostList from '../components/PostList'

const PartnersPage = ({ data }) => (
  <Layout>
    <SEO
      pathname="/partners"
      title="the brands powering the athlete - partners"
      image={data.headerImage.childImageSharp.SEO.src}
    />
    <Hero color={colors.blue}>
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
        imgStyle={{ objectPosition: '50% 75%' }}
      />
      <div
        css={css`
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

          margin-bottom: auto;
          padding-top: 3rem;
        `}
      >
        <h1>Partners</h1>
        <p>the brands powering the athlete</p>
        <ScrollArrow
          headerSize={60}
          style={css`
            margin-top: auto;
          `}
        />
      </div>
    </Hero>
    <SplitPaneSection
      image={data.ventumImage}
      name="ventum"
      background={colors.blue}
      reverse
    >
      <h2>Ventum</h2>
      <h3>Radical Design. Radical Results.</h3>
      <blockquote>
        “Coming from racing bikes at the world's highest level means Nic knows a
        good bike when he rides one. We are really pleased he choose to ride the
        Ventum One”
        <span> - Ventum</span>
      </blockquote>

      <blockquote>
        “Ventum makes a pure-bread triathlon bike. By not following convention
        or UCI-rules, they radically raise the bar! Both in terms of speed and
        comfort”
        <span> - Nic</span>
      </blockquote>
      <p>
        visit{' '}
        <OutboundLink href="https://ventumracing.com">
          www.ventumracing.com
        </OutboundLink>
      </p>
    </SplitPaneSection>
    <SplitPaneSection
      image={data.incrediwearImage}
      name="incrediwear"
      background={colors.yellow}
    >
      <h2
        css={css`
          color: ${colors.blue};
        `}
      >
        Hoka One One
      </h2>
      <h3>the running shoe reinvented</h3>
      <blockquote>
        a quote from Nic: “Ut elit nostrud Lorem occaecat ex laboris consectetur
        tempor occaecat occaecat excepteur anim veniam.”
        <span> - Nic</span>
      </blockquote>
      <blockquote>
        a quote from Hoka one one: “Ut elit nostrud Lorem occaecat ex laboris
        consectetur tempor occaecat occaecat excepteur anim veniam.”
        <span> - Hoka One One</span>
      </blockquote>
      <p>
        visit{' '}
        <OutboundLink href="https://hokaoneone.com">
          www.hokaoneone.com
        </OutboundLink>
      </p>
    </SplitPaneSection>
    <SplitPaneSection
      image={data.hokaoneoneImage}
      name="ventum"
      background={colors.blue}
      reverse
    >
      <h2>Incrediwear</h2>
      <h3>live incredibly</h3>
      <blockquote>
        a quote from Nic: “Ut elit nostrud Lorem occaecat ex laboris consectetur
        tempor occaecat occaecat excepteur anim veniam.”
        <span> - Nic</span>
      </blockquote>
      <blockquote>
        a quote from Hoka one one: “Ut elit nostrud Lorem occaecat ex laboris
        consectetur tempor occaecat occaecat excepteur anim veniam.”
        <span> - Hoka One One</span>
      </blockquote>
      <p>
        visit{' '}
        <OutboundLink href="https://incrediwear.com">
          www.incrediwear.com
        </OutboundLink>
      </p>
    </SplitPaneSection>
    <SplitPaneSection
      image={data.wantedImage}
      name="ventum"
      background={colors.yellow}
    >
      <h2
        css={css`
          color: ${colors.blue};
        `}
      >
        Wanted!
      </h2>
      <h3>
        <i>The Smile</i>&trade; is looking to team up!
      </h3>
      <p>
        Starting new adventures is exciting, energizing and scary!
        <br />
        If you are interested in joining me in this one or just want to have a
        chat about my plans, don't hesitate to{' '}
        <Obfuscate
          email={data.site.siteMetadata.email}
          headers={{
            subject: `let's team up`,
          }}
        >
          drop me a line
        </Obfuscate>
        .
      </p>
    </SplitPaneSection>
    {data.posts && data.posts.edges.length > 0 && (
      <Section background="whitesmoke">
        <Container>
          <h2>Related posts</h2>
          <PostList posts={data.posts} />
        </Container>
      </Section>
    )}
  </Layout>
)

export default PartnersPage

export const PartnersPageQuery = graphql`
  query PartnersPageQuery {
    site {
      siteMetadata {
        siteTitle
        siteTagline
        siteDescription
        email
        phone
      }
    }
    headerImage: file(base: { eq: "nic-tadaa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
      ...SEOImageFragment
    }
    ventumLogo: file(base: { eq: "sponsor-ventum.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    ventumImage: file(base: { eq: "bike.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    hokaoneoneLogo: file(base: { eq: "sponsor-hokaoneone.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    hokaoneoneImage: file(base: { eq: "shoes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    incrediwearLogo: file(base: { eq: "sponsor-incrediwear.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    incrediwearImage: file(base: { eq: "shoes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    wantedImage: file(base: { eq: "nic-and-bike.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    posts: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "post" }
          draft: { eq: false }
          pages: { eq: "partners" }
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
  }
`
