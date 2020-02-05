import React from "react"
import SEO from "../components/seo"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"

import TextImage from "../components/text-image"
import TextBlock from "../components/text-block"
import Mission from "../components/mission"
import HeroStack from "../components/hero-stack"

import { Box, Button } from "grommet"

export default () => {
  const image = useStaticQuery(graphql`
    query {
      projects: file(relativePath: { eq: "projects.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <Box direction="row" gap="large">
        <Button color="accent-1" label="Project 1" />
        <Button color="accent-1" label="Project 2" />
        <Button color="accent-1" label="Project 3" />
      </Box>
      <HeroStack
        text="More about what our projects are ..."
        image={image.projects.childImageSharp.fluid}
      />

      <Box>this is about us</Box>
    </Layout>
  )
}
