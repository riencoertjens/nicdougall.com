/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const instagramScrape = require('./utils/instascrape.js')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node) // get images from markdown files

  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    if (node.frontmatter.templateKey == 'post') {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }
}
// exports.onPreBootstrap = () => {
//   instagramScrape('ndougall')
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "post" } } }
      ) {
        tags: group(field: frontmatter___tags) {
          fieldValue
        }
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/components/templates/post-template.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
    result.data.allMarkdownRemark.tags.forEach(({ fieldValue: tag }) => {
      createPage({
        path: `tag/${tag}`,
        component: path.resolve(`./src/components/templates/tag-template.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          tag: tag,
        },
      })
    })
  })
}
