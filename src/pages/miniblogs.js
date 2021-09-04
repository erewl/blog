import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import '../components/layout.css'; // add some style if you want!
import '../components/index.css'; // add some style if you want!

export default function MiniBlogs({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      <Layout />
      <div className="posts">
        <h1>MiniBlogs Page</h1>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query MiniblogsQuery {
    allMarkdownRemark(
      filter: {frontmatter: {path: { glob: "/miniblogs/*" } }}
      sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`