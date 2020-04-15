import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroStack from "../components/hero-stack"
import ServiceCard from "../components/service-card"
import Contact from "../components/contact"

import { Box, Button, Heading, Text, Tabs, Tab } from "grommet"
import { CatalogOption } from "grommet-icons"

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
            title="Edu Services"
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
            title="Prt Services"
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
            title="Gen Services"
            text="Etsy banjo poke williamsburg mustache cloud bread taiyaki pok pok"
            image={image.services.childImageSharp.fluid}
            button={
              <Link to="/blog">
                <Button>See this</Button>
              </Link>
            }
          />
        </Box>
        <Box
          pad="medium"
          margin={{ vertical: "large" }}
          align="center"
          width="large"
        >
          <Heading>General Title</Heading>
          <Text>
            Booty jack long clothes to go on account snow keelhaul lanyard brig
            coffer bounty. Walk the plank belaying pin heave down spike topmast
            tackle squiffy crack Jennys tea cup barkadeer furl. Heave to lookout
            pink Privateer Sea Legs chantey pressgang port gun provost.
          </Text>
          <Link to="/contact">
            <Button primary hoverIndicator label="Contact Us" />
          </Link>
        </Box>
        <Box fill background="white" pad="medium">
          <Tabs>
            <Tab title="Edu">
              <Box direction="row-responsive" justify="center">
                <Box width="medium" direction="row">
                  <CatalogOption />
                  <Text>sadasd asdasdfasdf</Text>
                </Box>
              </Box>
            </Tab>
            <Tab title="Pro"></Tab>
          </Tabs>
        </Box>
        <Box fill background="white">
          <Contact />
        </Box>
      </Layout>
    </>
  )
}
