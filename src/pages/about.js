import React from "react"
import SEO from "../components/seo"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"

import TextImage from "../components/text-image"
import TextBlock from "../components/text-block"
import Mission from "../components/mission"
import HeroStack from "../components/hero-stack"

import { Box } from "grommet"

export default () => {
  const image = useStaticQuery(graphql`
    query {
      about1: file(relativePath: { eq: "about1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <HeroStack text={<Mission />} image={image.about1.childImageSharp.fluid} />
      <Box height="large" justify="center">
        <TextImage
          text="About 1"
          image={image.about1.childImageSharp.fluid}
        />
      </Box>
      <Box>this is about us</Box>
    </Layout>
  )
}
