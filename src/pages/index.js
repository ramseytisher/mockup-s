import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import TextImage from "../components/text-image"
import TextBlock from "../components/text-block"
import Mission from "../components/mission"

import { Box } from "grommet"

export default () => {
  const image = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Box height="large" justify="center">
        <TextImage
          text="asdfasdfasdasf"
          image={image.placeholderImage.childImageSharp.fluid}
        />
      </Box>
      <Box flex="grow" pad="medium" gap="medium" direction="row-responsive">
        <TextBlock
          title="Our This ... "
          background="light-2"
          text="Some long form of text that would go here ..."
        />
        <Mission />
        <TextBlock
          title="Our What ???"
          background="light-2"
          text="Some long form of text that would go here ..."
        />
      </Box>
    </Layout>
  )
}
