import React from "react"
import { useStaticQuery } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroStack from "../components/hero-stack"
import ServiceCard from "../components/service-card"

import { Box, Grid, Heading, Text } from "grommet"

export default () => {
  const image = useStaticQuery(graphql`
    query {
      services: file(relativePath: { eq: "services.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Our Services" />

      <Layout>
          <HeroStack
            image={image.services.childImageSharp.fluid}
            text="Our services"
          />
          <Box align="center" gap="small" pad="small">
            <Heading level={3} margin="none">Some awesome heading</Heading>
            <Text>Some more informaiton</Text>
          </Box>

          <Box direction="row-responsive" flex="grow" wrap margin="small" justify="center">
            <ServiceCard
              title="Title"
              text="text"
              image={image.services.childImageSharp.fluid}
            />
            <ServiceCard
              title="Title"
              text="text"
              image={image.services.childImageSharp.fluid}
            />
            <ServiceCard
              title="Title"
              text="text"
              image={image.services.childImageSharp.fluid}
            />
            <ServiceCard
              title="Title"
              text="text"
              image={image.services.childImageSharp.fluid}
            />
            <ServiceCard
              title="Title"
              text="text"
              image={image.services.childImageSharp.fluid}
            />
            <ServiceCard
              title="Title"
              text="text"
              image={image.services.childImageSharp.fluid}
            />
            <ServiceCard
              title="Title"
              text="text"
              image={image.services.childImageSharp.fluid}
            />
          </Box>
      </Layout>
    </>
  )
}
