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
      images={data.ventumImages}
      name="ventum"
      background={colors.blue}
      reverse
    >
      <h2>Ventum</h2>
      <h3>Radical Design. Radical Results.</h3>
      <blockquote>
        “This. Bike. Is. Fast. But my favorite thing about it so far has been
        how comfortable it is on the road. It soaks up all the road vibration
        while still remaining stiff when you’re putting the power down. I think
        I’m in love!”
        <span> - Nic</span>
      </blockquote>
      <blockquote>
        “After racing as a World Tour cyclist for the last 4 years, Nic knows a
        good bike when he rides one. We are really excited to be working with
        someone as experienced on the bike as Nic this year.”
        <span> - Ventum</span>
      </blockquote>
      <p>
        visit{' '}
        <OutboundLink href="https://ventumracing.com">
          www.ventumracing.com
        </OutboundLink>
      </p>
    </SplitPaneSection>
    <SplitPaneSection
      images={data.hokaoneoneImages}
      name="hokaoneone"
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
        ”I’m really excited to be part of the Hoka family this year. They’re
        really everything I’ve been looking for in a shoe, plenty of cushioning,
        just the right amount of support and light on the feet.”
        <span> - Nic</span>
      </blockquote>
      <blockquote>
        ”Hoka Quote”
        <span> - Hoke One One</span>
      </blockquote>
      <p>
        visit{' '}
        <OutboundLink href="https://hokaoneone.com">
          www.hokaoneone.com
        </OutboundLink>
      </p>
    </SplitPaneSection>
    <SplitPaneSection
      images={data.incrediwearImages}
      name="incrediwear"
      background={colors.blue}
      reverse
    >
      <h2>Incrediwear</h2>
      <h3>live incredibly</h3>
      <blockquote>
        ”I’ve used Incrediwear products for the last 4 years and I’ve had
        nothing but amazing results with them. There is a tonne of science and
        testing behind their products and it really shows in the quality of the
        results I’ve had using them. My favorite product is the recovery leg
        sleeves!”
        <span> - Nic</span>
      </blockquote>
      <blockquote>
        ”After providing Nic with product for the last four years as a
        professional cyclist we are really excited to continue to support him
        following his return to triathlon.”
        <span> - Incrediwear</span>
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
      images={data.wantedImages}
      name="wanted"
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
    headerImage: file(
      base: { eq: "hero.jpg" }
      sourceInstanceName: { eq: "partners-images" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
      ...SEOImageFragment
    }
    ventumImages: allFile(
      filter: {
        sourceInstanceName: { eq: "partners-images" }
        relativeDirectory: { eq: "ventum" }
      }
    ) {
      edges {
        node {
          ...ImageSliderFragment
        }
      }
    }
    hokaoneoneImages: allFile(
      filter: {
        sourceInstanceName: { eq: "partners-images" }
        relativeDirectory: { eq: "hoka" }
      }
    ) {
      edges {
        node {
          ...ImageSliderFragment
        }
      }
    }
    incrediwearImages: allFile(
      filter: {
        sourceInstanceName: { eq: "partners-images" }
        relativeDirectory: { eq: "incrediwear" }
      }
    ) {
      edges {
        node {
          ...ImageSliderFragment
        }
      }
    }
    wantedImages: allFile(
      filter: {
        sourceInstanceName: { eq: "partners-images" }
        relativeDirectory: { eq: "wanted" }
      }
    ) {
      edges {
        node {
          ...ImageSliderFragment
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
