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

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      pathname="/about"
      title="the man behind the smile - about"
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
      <div>
        <h1>About</h1>
        <p>the man behind the smile</p>
        <ScrollArrow
          headerSize={60}
          style={css`
            margin-top: auto;
          `}
        />
      </div>
    </Hero>
    <Section background={colors.yellow}>
      <Container>
        <h2
          css={css`
            color: ${colors.blue};
          `}
        >
          Bio
        </h2>
        <p>
          <strong>
            <i>Early Years</i> - U19 Sprint Distance World Champion 2009
          </strong>
          <br />
          I've always had a passion for sport and as a kid I played almost
          everything from Waterpolo to Aussie Rules football, but endurance
          sport was where I started to focus my attention as a teenager. After
          swimming and running competitively for a few years my attention was
          captured by Triathlon in high school. During that time I made 3 state
          teams and won the 16-19 Age Group Sprint Distance World Championships
          in 2009.
          <blockquote>
            Nic is amazing! <span>- national coach at the time?</span>
          </blockquote>
        </p>

        <p>
          <strong>
            <i>The World Tour - 2014-2018</i> - Top 20 elite World Championship
            2016
          </strong>
          <br />
          After 2009 I made the decision to focus on cycling with the goal of
          making it to the highest level of the sport. In 2014 I turned
          professional with MTN Qhubeka, which later became Team Dimension Data
          after it was granted World Tour status in 2016. I was fortunate enough
          to ride some of the biggest races in the world with this team
          including 2 Vuelta Espanas and the big Spring Classics like De Ronde
          van Vlaanderen. I also placed Top 20 at Road Worlds in 2016.
          <blockquote>
            Nic is amazing! <span>- Mark Cavendish?</span>
          </blockquote>
        </p>

        <p>
          <strong>
            <i>The Return to the roots</i>
          </strong>
          <br />
          In 2019 I'm excited to be returning to my passion for Triathlon. I've
          missed the variety and the challenge that only the combination of
          three sports can provide. I'll always be thankful for my time in the
          peloton but at the same time I'm extremely excited to be chasing my
          own personal success as a triathlete.
          <blockquote>
            Nic is amazing! <span>- some big shot in triathlon?</span>
          </blockquote>
        </p>

        <p>
          <strong>
            <i>Family</i>
          </strong>
          <br />I met Brooke Sarah in -year-, blablabla we got married in -year-
          blablabla. (write something nice!)
          <blockquote>
            Brooke is my queen Dora my princess! <span>- Nic</span>
          </blockquote>
        </p>
        <GatsbyImage
          fixed={data.family.childImageSharp.fixed}
          style={{
            borderRadius: '100%',
            margin: '2rem auto 0',
            display: 'block',
          }}
        />
      </Container>
    </Section>
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
    headerImage: file(base: { eq: "nic-smile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
      ...SEOImageFragment
    }
    family: file(base: { eq: "dougall-family.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    posts: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "post" }
          draft: { eq: false }
          pages: { eq: "about" }
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
