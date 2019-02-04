import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import {
  Hero,
  Section,
  Container,
  pxToRem,
} from '../components/webhart-components'
import GatsbyImage from 'gatsby-image'
import css from '@emotion/css'
import LogoSVG from '../images/logo.svg'
import { colors, ButtonGatsbyLink } from '../site/styles'
import SEO from '../components/webhart-components/SEO'
import GatsbyLink from 'gatsby-link'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="feed the furnace - blog" />
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
      </div>
    </Hero>
    <Section background={colors.yellow}>
      <Container width="wide">
        <h2
          css={css`
            color: ${colors.blue};
          `}
        >
          latest posts
        </h2>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 1rem;
          `}
        >
          {data.posts.edges.map(({ node }, i) => (
            <div
              key={i}
              css={css`
                display: flex;
                flex-direction: column;
                padding: 0.5rem;
                background: ${colors.blue};
                color: white;
                a {
                  text-decoration: none;
                }
                .gatsby-image-wrapper {
                  margin: -0.5rem;
                  margin-bottom: 0.5rem;
                }
                h3 {
                  color: ${colors.yellow};
                  margin: 0;
                }
                span {
                  color: ${colors.white};
                  font-size: ${pxToRem(14)};
                  margin: 0.5rem 0;
                  a {
                    color: ${colors.yellow};
                  }
                }
                p {
                  margin: 0;
                }
              `}
            >
              <GatsbyLink to="/">
                <GatsbyImage
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
                <h3>{node.frontmatter.title}</h3>
              </GatsbyLink>
              <span>
                {node.frontmatter.date} in{' '}
                <GatsbyLink to={`/category/${node.frontmatter.category}`}>
                  {node.frontmatter.category}
                </GatsbyLink>
              </span>
              <p>
                {node.excerpt}{' '}
                <GatsbyLink
                  to="/"
                  css={css`
                    color: ${colors.yellow};
                  `}
                >
                  read more
                </GatsbyLink>
              </p>
              {/* tags */}
              <div
                css={css`
                  margin: auto -0.2rem 0;
                  a {
                    color: ${colors.blue};
                    padding: 0 0.3rem;
                    background: ${colors.yellow};
                    border-radius: 50px;
                    margin: 0 0.2rem;
                    font-size: ${pxToRem(13)};
                  }
                `}
              >
                {node.frontmatter.tags.map((tag, i) => (
                  <GatsbyLink to={`/tag/${tag}`}>{tag}</GatsbyLink>
                ))}
              </div>
            </div>
          ))}
        </div>
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
      filter: { frontmatter: { templateKey: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            draft
            featured
            category
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    headerImage: file(base: { eq: "nic-beach.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
