import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Hero, Section, Container } from '../components/webhart-components'
import GatsbyImage from 'gatsby-image'
import css from '@emotion/css'
import LogoSVG from '../images/logo.svg'
import { colors, ButtonGatsbyLink } from '../site/styles'
import SEO from '../components/webhart-components/SEO'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="the man behind the smile - about" />
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
          /*
          margin-bottom: 50vh;
          padding-top: 3rem;
          */
        `}
      >
        {/* <img src={LogoSVG} height={75} alt="logo" /> */}
        <h1>Blog</h1>
        <p>Feed the furnace</p>
      </div>
    </Hero>
    <Section background={colors.yellow}>
      <Container>
        <h2
          css={css`
            color: ${colors.blue};
          `}
        >
          latest posts
        </h2>
        <p>
          Excepteur et veniam deserunt tempor. Non cillum quis do nisi ullamco
          eiusmod anim Lorem consectetur tempor minim exercitation minim. Labore
          mollit culpa aute ullamco minim voluptate. Anim cillum commodo nulla
          elit qui pariatur cillum est elit reprehenderit cupidatat exercitation
          nisi aute. Ex ipsum labore in adipisicing ut dolor excepteur dolore
          veniam ullamco.
        </p>
        <p>
          Velit pariatur est ex officia voluptate sunt Lorem elit aliqua labore
          cillum commodo culpa officia. Sint excepteur dolore commodo commodo
          dolor Lorem voluptate. Eu tempor laboris magna minim aliquip velit id
          velit consectetur. Eiusmod do adipisicing proident occaecat ut. Amet
          dolor cupidatat voluptate labore laborum excepteur dolor anim aliquip
          sit et. Incididunt consectetur amet ad nisi est.
        </p>
      </Container>
    </Section>
  </Layout>
)

export default AboutPage

export const AboutPageQuery = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        siteTitle
        siteTagline
        siteDescription
      }
    }
    headerImage: file(base: { eq: "nic-dora.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// instagramUser: allPostsJson(limit: 1) {
//   edges {
//     node {
//       userName
//       userFullName
//       userBio
//       userFollowers
//       userPostCount
//       id
//       code
//       likes
//       comment
//       text
//       type
//       image {
//         childImageSharp {
//           fluid(maxWidth: 230, quality: 75) {
//             originalName
//           }
//         }
//       }
//     }
//   }
// }
// instagramPosts: allPostsJson(limit: 13) {
//   edges {
//     node {
//       id
//       code
//       likes
//       comment
//       type
//       text
//       image {
//         childImageSharp {
//           fluid(maxWidth: 80, quality: 75) {
//             originalName
//           }
//         }
//       }
//     }
//   }
// }
