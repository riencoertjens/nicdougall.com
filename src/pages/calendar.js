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
import PostList from '../components/PostList'

export const EventsList = ({ events, limit }) =>
  events
    .sort((a, b) => (a.dateRaw > b.dateRaw ? 1 : -1))
    .map(
      (event, i) =>
        (!limit || limit > i) && (
          <div
            key={i}
            css={css`
              h3 {
                margin-bottom: 0;
              }
            `}
          >
            <h3>{event.title}</h3>
            {event.end_date ? (
              <span>
                {event.dateAlt} - {event.end_date}
              </span>
            ) : (
              <span>{event.date}</span>
            )}{' '}
            <span
              css={css`
                color: ${colors.yellow};
              `}
            >
              {event.type}
            </span>
            <p
              css={css`
                a {
                  color: ${colors.yellow};
                }
              `}
            >
              {event.description}{' '}
              {event.ext_link && (
                <OutboundLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={event.ext_link}
                >
                  more info
                </OutboundLink>
              )}
            </p>
          </div>
        )
    )

const CalendarPage = ({ data }) => (
  <Layout isCalendarPage>
    <SEO
      pathname="/calendar"
      title="the when and where - calendar"
      image={data.headerImage.childImageSharp.SEO.src}
    />
    <Hero height={75} color={colors.blue}>
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
        imgStyle={{ objectPosition: '50% 95%' }}
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
        <h1>Calendar</h1>
        <p>the when and where</p>
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
          <h2>What's up?</h2>
          <PostList posts={data.posts} />
        </Container>
      </Section>
    )}
  </Layout>
)

export default CalendarPage

export const CalendarPageQuery = graphql`
  query CalendarPageQuery {
    site {
      siteMetadata {
        siteTitle
        siteTagline
        siteDescription
      }
    }
    headerImage: file(base: { eq: "nic-pier.jpg" }) {
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
          draft: { eq: false }
          pages: { eq: "calendar" }
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

export const EventsListFragment = graphql`
  fragment EventsListFragment on MarkdownRemark {
    frontmatter {
      title
      events {
        dateRaw: date
        date(formatString: "MMMM DD, YYYY")
        dateAlt: date(formatString: "MMMM DD")
        end_date(formatString: "MMMM DD, YYYY")
        description
        title
        type
        ext_link
      }
    }
  }
`
