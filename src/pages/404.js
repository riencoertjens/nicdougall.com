import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/webhart-components/SEO'
import { Hero, ScrollArrow } from '../components/webhart-components'
import { colors } from '../site/styles'
import css from '@emotion/css'
import GatsbyLink from 'gatsby-link'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Pagina niet gevonden" />
    <Hero background={colors.overlay}>
      <h1
        css={css`
          color: ${colors.blauw};
          margin-top: auto;
        `}
      >
        oeps! deze pagina bestaat niet
      </h1>
      <h2>404</h2>
      <GatsbyLink to="/">ga terug naar start</GatsbyLink>
      <ScrollArrow
        label="contact"
        style={css`
          margin-top: auto;
        `}
      />
    </Hero>
  </Layout>
)

export default NotFoundPage
