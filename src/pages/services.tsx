import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroStack from "../components/hero-stack"
import ServiceCard from "../components/service-card"
import Contact from "../components/contact"

import { Box, Button, Heading, Text } from "grommet"

export default () => {
  const image = useStaticQuery(graphql`
    query {
      tools: file(relativePath: { eq: "tools-original.jpg" }) {
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
        <Box
          background="black"
          height="medium"
          align="center"
          justify="center"
          direction="row"
        >
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
          wrap
          align="center"
          justify="center"
          pad={{ vertical: "large" }}
          background="white"
          fill
          gap="medium"
        >
          <ServiceCard
            title="Service Ct"
            text="Etsy banjo poke williamsburg mustache cloud bread taiyaki pok pok
              art party seitan bitters you probably haven't heard of them vice.
              Banh mi banjo hammock small batch whatever williamsburg adaptogen
              four loko quinoa XOXO wayfarers franzen."
            image={image.services.childImageSharp.fluid}
            button={
              <Link to="/blog">
                <Button>See this</Button>
              </Link>
            }
          />
          <ServiceCard
            title="Service Cs"
            text="Etsy banjo poke williamsburg mustache cloud bread taiyaki pok pok
              art party seitan bitters you probably haven't heard of them vice."
            image={image.services.childImageSharp.fluid}
            button={
              <Link to="/blog">
                <Button>See this</Button>
              </Link>
            }
          />
          <ServiceCard
            title="Service Wd"
            text="Etsy banjo poke williamsburg mustache cloud bread taiyaki pok pok"
            image={image.services.childImageSharp.fluid}
            button={
              <Link to="/blog">
                <Button>See this</Button>
              </Link>
            }
          />
        </Box>
        <Contact />
      </Layout>
    </>
  )
}
