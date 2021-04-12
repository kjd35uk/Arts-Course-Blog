const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: edge.node.frontmatter.path,
      component: blogPostTemplate
    })
  })
}
