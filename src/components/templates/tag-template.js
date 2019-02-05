import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import { Hero, ScrollArrow, Section, Container } from '../webhart-components'
import GatsbyImage from 'gatsby-image'
import { colors } from '../../site/styles'
import css from '@emotion/css'
import SEO from '../webhart-components/SEO'
import PostList from '../PostList'

const TagPage = ({ data, pageContext: { tag } }) => {
  return (
    <Layout>
      <SEO
        path={`tag/${tag}`}
        title={`tag: ${tag}`}
        image={data.headerImage.childImageSharp.SEO.src}
      />
      <Hero color={colors.blue} height={50}>
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
            width: 100%;
            background: rgba(255, 255, 255, 0.75);
            position: relative;
            :after,
            :before {
              content: ' ';
              display: block;
              width: 100%;
              position: absolute;
              height: 100px;
            }
            :after {
              background: linear-gradient(
                rgba(255, 255, 255, 0.75),
                transparent
              );
            }
            :before {
              bottom: 100%;
              background: linear-gradient(
                transparent,
                rgba(255, 255, 255, 0.75)
              );
            }
          `}
        >
          <h1>tag: {tag}</h1>
          <ScrollArrow
            headerSize={60}
            style={css`
              margin-top: auto;
            `}
          />
        </div>
      </Hero>
      {data.posts && data.posts.edges.length > 0 && (
        <Section background="whitesmoke">
          <Container>
            <h2>posts</h2>
            <PostList posts={data.posts} />
          </Container>
        </Section>
      )}
    </Layout>
  )
}

export default TagPage

export const TagPageQuery = graphql`
  query TagPageQuery($tag: String!) {
    headerImage: file(base: { eq: "nic-beach.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
      ...SEOImageFragment
    }
    posts: allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag }, draft: { eq: false } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          ...PostListFragment
        }
      }
    }
  }
`
