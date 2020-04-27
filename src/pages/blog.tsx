import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { HoverGrow } from "../components/animations"

import { Box, Text } from "grommet"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Box
        fill
        pad="medium"
        background="white"
        direction="row-responsive"
        justify="center"
        gap="small"
      >
        <Box gap="small" animation="fadeIn">
          {data.pages.nodes.map(({ id, frontmatter, fields }) => (
            <Box width="large" gap="small" pad="small" key={id}>
              <Text color="dark-3" size="small">
                {frontmatter.date}
              </Text>
              <Link to={fields.slug}>
                <Text weight="bold" size="large">
                  {frontmatter.title}
                </Text>
              </Link>
              <Box direction="row-responsive" gap="small">
                <Box width="medium">
                  <Text>{frontmatter.description}</Text>
                </Box>
                <Box width="medium">
                  <Img
                    key={id}
                    fluid={frontmatter.image.childImageSharp.fluid}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box>
          <HoverGrow>
            <Box height="small" width="medium">
              <Img
                fluid={data.lightbulb.childImageSharp.fluid}
                imgStyle={{ objectFit: "contain" }}
              />
            </Box>
          </HoverGrow>
          <Box width="medium" pad="small" elevation="small" round="small">
            asdsafd
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    lightbulb: file(relativePath: { eq: "lightbulb-white.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pages: allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
      nodes {
        id
        fileAbsolutePath
        frontmatter {
          title
          description
          date
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
