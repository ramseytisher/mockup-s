import React from "react"
import { Link, graphql } from "gatsby"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const shortcodes = { Link }

// a good one: https://cucumber.io/blog/bdd/example-mapping-introduction/

export default ({ data: { mdx } }: any) => {
  return (
    <Layout>
      <div>Hello from Blog Post Template</div>
      {mdx.frontmatter.title}
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
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
