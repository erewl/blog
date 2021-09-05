import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import '../components/layout.css'; // add some style if you want!
import '../components/index.css'; // add some style if you want!
import { Page, Tag } from "@geist-ui/react";

export default function MiniBlogs({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      <Layout />
      <div className="posts">
        <Page>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              let tags = post.frontmatter.tags ? post.frontmatter.tags.split(",") : []
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h2>
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  </h2>
                  <h3>{post.frontmatter.date}</h3>
                  {tags.map(tag => {
                    return <Tag key={tag}>{tag}</Tag>
                  }
                  )}
                  <p>{post.excerpt}</p>
                </div>
              )
            })}
        </Page>
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
            tags
            banner
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`