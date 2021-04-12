import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Post from '../components/Post';

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    {
      data.allMarkdownRemark.edges.map(post => {
        const { title, author, date, description, path } = post.node.frontmatter

        return (
          <Post 
            title={ title }
            author={ author }
            date={ date }
            description={ description }
            path={ path }
            key={`${date}__£${title}`}
          />
        )
      })
    }
  </Layout>
)

export default Blog;

export const AllBlogsQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`