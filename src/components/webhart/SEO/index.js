import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'
import Twitter from './Twitter'
import Facebook from './Facebook'
import SchemaOrg from './SchemaOrg'

const SEO = ({
  title = null,
  description = null,
  image = null,
  pathname = null,
  article = false,
  datePublished = false,
  author = false,
}) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: siteTitle
            titleTemplate
            defaultDescription: siteDescription
            siteUrl
            defaultImage: siteImage
            twitterUsername
            facebookAppID
            language: siteLanguage
            defaultAuthor: owner
            #organization
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          facebookAppID,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
        author: author || defaultAuthor,
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <html lang={language} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
          </Helmet>
          <Facebook
            pageUrl={seo.url}
            type={article ? 'article' : null}
            title={seo.title}
            description={seo.description}
            image={seo.image}
            appID={facebookAppID}
          />
          <Twitter
            username={twitterUsername}
            title={seo.title}
            description={seo.description}
            image={seo.image}
          />
          <SchemaOrg
            isBlogPost={article}
            url={seo.url}
            title={seo.title}
            image={seo.image}
            description={seo.description}
            canonicalUrl={siteUrl}
            datePublished={datePublished}
            author={seo.author}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </>
      )
    }}
  />
)

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

export default SEO
