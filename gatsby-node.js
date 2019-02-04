/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const instagramScrape = require('./utils/instascrape.js')

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node) // get images from markdown files
}
exports.onPreBootstrap = () => {
  console.log('test')
  instagramScrape('ndougall')
}
