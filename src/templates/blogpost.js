import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Page, Tag } from "@geist-ui/react"

// import '../css/blog-post.css';

export default function Template({ data }) {
  const { markdownRemark: post } = data
  let tags = post.frontmatter.tags ? post.frontmatter.tags.split(",") : []
  return (
    <div className="blog-post-container">
      <Layout />
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <Page>
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          {tags.map(tag => {
            return <Tag key={tag}>{tag}</Tag>
          }
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Page>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        banner
        path
        title
      }
    }
  }
`