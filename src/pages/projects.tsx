import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import { Box, Text } from "grommet"

const ProjectsPage = ({ data }: any) => (
  <Layout>
    <Box fill>
      <Img fluid={data.image.childImageSharp.fluid} />
    </Box>
    <Box background="white" fill align="center" pad="small">
      <Box
        elevation="medium"
        width="large"
        pad="medium"
        background="black"
        round="small"
      >
        <Text>
          {`Trysail Barbary Coast wherry crow's nest lee hogshead grapple matey
          fire ship bilged on her anchor. Mutiny tack snow matey marooned aft
          chantey ye strike colors loaded to the gunwalls. Privateer Gold Road
          lanyard heave to chase transom jury mast square-rigged loaded to the
          gunwalls rutters.`}
        </Text>
      </Box>
    </Box>
    <Box
      fill
      pad="medium"
      background="white"
      direction="row-responsive"
      justify="center"
      gap="small"
    >
      <Box gap="small" animation="fadeIn">
        {data.projects.nodes.map(({ id, frontmatter, fields }: any) => (
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
                <Img key={id} fluid={frontmatter.image.childImageSharp.fluid} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      {/* <Box>
        <Box width="medium" pad="small" elevation="small" round="small">
          asdsafd
        </Box>
      </Box> */}
    </Box>
  </Layout>
)

export default ProjectsPage

export const query = graphql`
  query {
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/project/" } }
    ) {
      nodes {
        id
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
    image: file(relativePath: { eq: "lab-science.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
