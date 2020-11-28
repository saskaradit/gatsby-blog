import React from "react"
import { Link,graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration:none;
  color: #fbf665;
  &:hover{
    color:yellow
  }
`
const BlogTitle = styled.h2`
  margin-bottom:1rem;
`

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Hi people</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {
        data.allMarkdownRemark.edges.map(({node})=>(
          <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
          </BlogLink>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
    
  </Layout>
)



export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
}

`

