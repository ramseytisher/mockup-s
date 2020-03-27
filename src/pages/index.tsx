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
  font-size: 3em;
`

export default () => {
  const image = useStaticQuery(graphql`
    query {
      lightbulb: file(relativePath: { eq: "lightbulb-white.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tools: file(relativePath: { eq: "tools.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Box background="black" height="small" align="center" justify="center">
        <MainHeading margin="none">we make it simple.</MainHeading>
      </Box>
      <Box
        background="black"
        direction="row-responsive"
        gap="medium"
        justify="center"
      >
        <Box
          background="white"
          pad="medium"
          height="medium"
          direction="row"
          align="center"
          justify="end"
          width="large"
          gap="medium"
          animation="slideUp"
        >
          <Box alignContent="center" width="medium">
            <Heading level={3} alignSelf="end">
              Our Ideas
            </Heading>
            <Text textAlign="end">
              Etsy banjo poke williamsburg mustache cloud bread taiyaki pok pok
              art party seitan bitters you probably haven't heard of them vice.
            </Text>
            <Button alignSelf="end">Link</Button>
          </Box>
          <Box height="small" width="small">
            <Img
              fluid={image.lightbulb.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
        <Box
          background="black"
          pad="medium"
          height="medium"
          width="large"
          direction="row"
          align="center"
          gap="medium"
          animation="slideDown"
        >
          <Box height="small" width="medium">
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
      <Box
        align="center"
        height="medium"
        width="100vw"
        justify="center"
        background="white"
        animation="slideLeft"
      >
        <Mission />
        <SiteLink to="/about">More about us</SiteLink>
      </Box>
      {/* <Box background="black">
        <Heading>Featured Content</Heading>
        thing 1 thing 2 thing 3
      </Box> */}
    </Layout>
  )
}
