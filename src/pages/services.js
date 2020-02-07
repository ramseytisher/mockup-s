import React from "react"
import { useStaticQuery, Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroStack from "../components/hero-stack"
import ServiceCard from "../components/service-card"

import { Box, Button, Heading, Text } from "grommet"

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
          text={
            <Box align="center" gap="small" pad="small">
              <Heading level={1} margin="none" size="large">
                Our Services
              </Heading>
              <Text>Some more informaiton</Text>
              <Link to="/contact">
                <Button primary size="large" label="Contact Us" color="accent-1"></Button>
              </Link>
            </Box>
          }
        />
        <Box
          direction="row-responsive"
          flex="grow"
          wrap
          margin="small"
          justify="center"
        >
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
