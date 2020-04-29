import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Heading, Button, Text, ResponsiveContext } from "grommet"
import styled from "styled-components"

import { Help } from "grommet-icons"

const MainHeading = styled(Heading)`
  font-family: "Rokkitt";
  font-weight: 100;
`

const ProjectDisplay = () => {
  const data = useStaticQuery(graphql`
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
            link
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
  `)

  const [showDetail, setShowDetail] = useState(true)

  return (
    <ResponsiveContext.Consumer>
      {size => {
        if (size !== "small") {
          return (
            <Box
              direction="row"
              align="center"
              justify="center"
              gap="medium"
              pad="large"
            >
              <Box pad="small">
                <MainHeading level={2} margin="none" color="accent-1">
                  Explore our projects
                </MainHeading>
                <Box
                  width="xsmall"
                  height="4px"
                  background="accent-1"
                  margin={{ vertical: "small" }}
                />
                <Box
                  width="large"
                  gap="medium"
                  pad="small"
                  direction="row-responsive"
                  wrap
                >
                  {data.projects.nodes.map(({ id, frontmatter }) => (
                    <Button
                      key={id}
                      href={frontmatter.link}
                      target="_blank"
                      margin={{ bottom: "small" }}
                      label={frontmatter.title}
                      hoverIndicator={{ color: "accent-1" }}
                    />
                  ))}
                </Box>
              </Box>
              <Box background="dark-1" width="4px" height="xsmall" />
              <Box width="medium" justify="center">
                <Text>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam ac lectus nec enim semper tincidunt. Phasellus et tempor 
                    nulla, quis euismod lectus. Vivamus varius imperdiet sapien eu 
                    eleifend.`}
                </Text>
              </Box>
            </Box>
          )
        } else {
          return (
            <Box align="center" pad="large">
              <Box direction="row" gap="small" align="center">
                <MainHeading level={2} margin="none" color="accent-1">
                  Explore our projects
                </MainHeading>
                <Button
                  size="small"
                  icon={<Help size="small" />}
                  onClick={() => setShowDetail(!showDetail)}
                />
              </Box>
              {showDetail ? (
                <Box width="large" gap="medium" pad="large">
                  {data.projects.nodes.map(({ id, frontmatter }) => (
                    <Button
                      key={id}
                      href={frontmatter.link}
                      target="_blank"
                      label={frontmatter.title}
                      hoverIndicator={{ color: "accent-1" }}
                    />
                  ))}
                </Box>
              ) : (
                <Box width="medium" justify="center" pad="medium">
                  <Text>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam ac lectus nec enim semper tincidunt. Phasellus et tempor 
                    nulla, quis euismod lectus. Vivamus varius imperdiet sapien eu 
                    eleifend.`}
                  </Text>
                </Box>
              )}
            </Box>
          )
        }
      }}
    </ResponsiveContext.Consumer>
  )
}

export default ProjectDisplay
