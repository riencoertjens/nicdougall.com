import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import { Hero, ScrollArrow, Section, Container } from '../webhart-components'
import GatsbyImage from 'gatsby-image'
import { colors } from '../../site/styles'
import css from '@emotion/css'
import SEO from '../webhart-components/SEO'
import { Tags } from '../PostList'

const PostPage = ({ data, pageContext: { slug } }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        pathname={slug}
        title={post.frontmatter.title}
        description={post.excerpt}
        image={post.frontmatter.image.childImageSharp.SEO.src}
      />
      <Hero color={colors.blue}>
        <GatsbyImage
          fluid={post.frontmatter.image.childImageSharp.fluid}
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
          <h1>{post.frontmatter.title}</h1>
          <ScrollArrow
            headerSize={60}
            style={css`
              margin-top: auto;
            `}
          />
        </div>
      </Hero>
      <Section background="whitesmoke">
        <Container width="narrow">
          <span>{post.frontmatter.date}</span>
          <Tags tags={post.frontmatter.tags} alt />
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            css={css`
              a {
                color: ${colors.blue};
              }
            `}
          />
        </Container>
      </Section>
    </Layout>
  )
}

export default PostPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
          ...SEOImageFragment
        }
      }
    }
  }
`
