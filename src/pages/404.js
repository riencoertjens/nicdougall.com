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
        oops! this page does not exist
      </h1>
      <h2>404</h2>
      <GatsbyLink to="/">back to start</GatsbyLink>
    </Hero>
  </Layout>
)

export default NotFoundPage
