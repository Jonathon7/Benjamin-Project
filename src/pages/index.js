import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import TopFooter from '../components/topfooter'

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <head>
        {' '}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />{' '}
      </head>
      <body>
        <Header
          title="The Benjamin Project"
          subTitle="Biblical Manhood Class and
  Fellowship"
        />
        <div className="width">
          <div className="main-content">
            <div className="text">
              <h3>Header Title</h3>
              <p>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                facilis quo. Ducimus repellendus distinctio quia! Recusandae
                suscipit, repellendus eum ipsum neque sequi dolorum f ugiat,
                explicabo assumenda vero accusantium consequatur animi? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Autem,
                facilis quo. Ducimus repellendus distinctio quia! Recusandae
                suscipit, repellendus eum ipsum neque sequi dolorum f ugiat,
                explicabo assumenda vero accusantium consequatur animi?
              </p>
            </div>

            <div className="text">
              <h3>Header Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                quo quia nulla maxime rerum odit vitae quisquam aspernatur eos
                placeat repellat nobis nisi exercitationem deleniti alias id.
                Asperiores, earum molestias. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Autem, facilis quo. Ducimus
                repellendus distinctio quia! Recusandae suscipit, repellendus
                eum ipsum neque sequi dolorum f ugiat, explicabo assumenda vero
                accusantium consequatur animi?
              </p>
            </div>
          </div>
          <hr />
          <Content />
          <hr />
          <div className="latest-blogs">
            <h2>Latest From Our Blog</h2>
          </div>
          {postList.edges.map(({ node }, i) => (
            <Link to={node.fields.slug} className="link">
              <div className="post-list">
                <h2>{node.frontmatter.title}</h2>
                <span>{node.frontmatter.date}</span>
                <p>{node.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <br />
        <br />
        <TopFooter />
        <script>
          if (window.netlifyIdentity){' '}
          {window.netlifyIdentity.on('init', function user() {
            if (!user) {
              window.netlifyIdentity.on('login', function() {
                document.location.href = '/admin/'
              })
            }
          })}
        </script>
      </body>
    </Layout>
  )
}
export default IndexPage
export const listQuery = graphql`
  query ListQuery {
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
