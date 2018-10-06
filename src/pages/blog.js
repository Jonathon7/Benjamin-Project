import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Heading from '../components/heading'

const Blog = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <Heading
        title="Welcome to Our Blog"
        subText="The Benjamin Project blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis
                quo."
      />
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link">
          <div className="blog-post-list">
            <h2>{node.frontmatter.title}</h2>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default Blog

export const lQuery = graphql`
  query lQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
