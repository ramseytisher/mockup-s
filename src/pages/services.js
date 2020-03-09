import React from "react"
import { useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroStack from "../components/hero-stack"
import ServiceCard from "../components/service-card"

import { Box, Button, Heading, Text } from "grommet"

export default () => {
  const image = useStaticQuery(graphql`
    query {
      tools: file(relativePath: { eq: "tools.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
        {/* <HeroStack
          image={image.services.childImageSharp.fluid}
          text={
            <Box align="center" gap="small" pad="small">
              <Heading level={1} margin="none" size="large">
                Our Services
              </Heading>
              <Text>Some more informaiton</Text>
              <Link to="/contact">
                <Button
                  primary
                  size="large"
                  label="Contact Us"
                  color="accent-1"
                ></Button>
              </Link>
            </Box>
          }
        /> */}
        <Box background="black" height="medium" align="center" justify="center" direction="row">
          <Heading>we make it simple</Heading>
          <Box width="medium">
            <Img
              fluid={image.tools.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
        <Box
          direction="row-responsive"
          flex="grow"
          wrap
          margin="small"
          justify="center"
        >
          <ServiceCard
            title="Title"
            text="Etsy banjo poke williamsburg mustache cloud bread taiyaki pok pok
              art party seitan bitters you probably haven't heard of them vice.
              Banh mi banjo hammock small batch whatever williamsburg adaptogen
              four loko quinoa XOXO wayfarers franzen."
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
