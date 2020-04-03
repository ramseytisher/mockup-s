import React from "react"
import { Link, graphql } from "gatsby"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Box, Heading } from "grommet"

import Layout from "../components/layout"

const shortcodes = { Link }

export default ({ data: { mdx } }) => {
  return (
    <Layout>
      <Box fill background="white">
        <Heading size="small">{mdx.frontmatter.title}</Heading>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
