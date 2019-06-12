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
import { colors } from '../site/styles'
import SEO from '../components/webhart-components/SEO'
import PostList from '../components/PostList'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO
      pathname="/blog"
      title="feed the furnace - blog"
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
      />
      <div
        css={css`
          /* margin-bottom: 50vh;
          padding-top: 3rem; */
        `}
      >
        {/* <img src={LogoSVG} height={75} alt="logo" /> */}
        <h1>Blog</h1>
        <p>Feed the furnace</p>
        <ScrollArrow
          headerSize={60}
          style={css`
            margin-top: auto;
          `}
        />
      </div>
    </Hero>
    <Section background="whitesmoke">
      <Container>
        <h2
          css={css`
            color: ${colors.blue};
          `}
        >
          latest posts
        </h2>
        <PostList blogPage posts={data.posts} />
      </Container>
    </Section>
  </Layout>
)

export default BlogPage

export const BlogPageQuery = graphql`
  query BlogPageQuery {
    site {
      siteMetadata {
        siteTitle
        siteTagline
        siteDescription
      }
    }

    posts: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "post" }, draft: { eq: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          ...PostListFragment
        }
      }
    }
    headerImage: file(
      base: { eq: "hero.jpg" }
      sourceInstanceName: { eq: "blog-images" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
      ...SEOImageFragment
    }
  }
`
