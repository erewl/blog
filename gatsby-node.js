/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/templates/blogpost.js`)
    const miniBlogPostTemplate = path.resolve(`src/templates/blogpost.js`)

    const resultMiniblogs = await graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {path: { glob: "/miniblogs/*" } }}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
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


  const resultBlogs = await graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {path: { glob: "/blogs/*" } }}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
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

    if (resultMiniblogs.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    resultMiniblogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: miniBlogPostTemplate,
            context: {} // additional data can be passed via context
        })
    })
  
  if (resultBlogs.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  resultBlogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    })
  })
}