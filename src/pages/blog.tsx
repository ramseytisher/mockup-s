import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import { Box, Text } from "grommet"

export default ({ data }) => (
  <Layout>
    <Box
      fill
      pad="medium"
      background="white"
      direction="row-responsive"
      justify="center"
      gap="small"
    >
      <Box gap="small">
        {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
          <Box width="large" gap="small" pad="small">
            <Text color="dark-3" size="small">
              {frontmatter.date}
            </Text>
            <Link to={fields.slug}>
              <Text weight="bold">{frontmatter.title}</Text>
            </Link>
            <Text>{frontmatter.description}</Text>
          </Box>
        ))}
      </Box>
      <Box>
        <Box width="medium" pad="small" elevation="small" round="small">
          asdsafd
        </Box>
      </Box>
    </Box>
    <pre>{JSON.stringify(data.allMdx, null, 2)}</pre>
  </Layout>
)

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          description
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
