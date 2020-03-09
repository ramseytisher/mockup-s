import React from "react"
import { useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TextBlock from "../components/text-block"
import Mission from "../components/mission"
import HeroStack from "../components/hero-stack"

import { Box, Stack, Heading, Text, Button } from "grommet"

const SiteLink = styled(Link)`
  font-family: "Bangers";
  text-decoration: none;
  color: gray;

  &:hover {
    font-size: 2rem;
  }
`

const MainHeading = styled(Heading)`
  font-family: "Ubuntu";
  font-size: 10vh;
`

export default () => {
  const image = useStaticQuery(graphql`
    query {
      lightbulb: file(relativePath: { eq: "lightbulb-white.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tools: file(relativePath: { eq: "tools.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Box background="black" height="medium" align="center" justify="center">
        <MainHeading>we make it simple</MainHeading>
      </Box>
      <Box
        background="black"
        direction="row-responsive"
        flex="grow"
        gap="medium"
        justify="center"
      >
        <Box
          background="white"
          pad="medium"
          width="45vw"
          height="medium"
          direction="row"
          align="center"
          justify="end"
          gap="medium"
        >
          <Box alignContent="center" width="medium">
            <Heading level={3}>Our Ideas</Heading>
            <Text>
              Etsy banjo poke williamsburg mustache cloud bread taiyaki pok pok
              art party seitan bitters you probably haven't heard of them vice.
            </Text>
            <Button>Link</Button>
          </Box>
          <Box width="medium">
            <Img
              fluid={image.lightbulb.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
        <Box
          background="black"
          pad="medium"
          width="55vw"
          height="medium"
          direction="row"
          align="center"
          gap="medium"
        >
          <Box width="medium">
            <Img
              fluid={image.tools.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
            />
          </Box>
          <Box>
            <Heading level={3}>Our Systems</Heading>
            <Text>
              Etsy banjo poke williamsburg mustache cloud bread taiyaki pok pok
              art party seitan bitters you probably haven't heard of them vice.
            </Text>
            <Button>Link</Button>
          </Box>
        </Box>
      </Box>
      <Box align="center" height="medium" justify="center">
        <Mission />
        <SiteLink to="/about">More about us</SiteLink>
      </Box>
      <Box height="large" background="black">
        <Heading>Featured Content</Heading>
      </Box>
    </Layout>
  )
}
