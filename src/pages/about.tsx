import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Contact from "../components/contact"
import Typer from "../components/typer"
import TextImage from "../components/text-image"
import Mission from "../components/mission"
import HeroStack from "../components/hero-stack"
import IconText from "../components/icon-text"

import { Box, Paragraph, Button } from "grommet"
import { Deploy, Code } from "grommet-icons"

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
      shapes: file(relativePath: { eq: "shapes.jpg" }) {
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
      <Box background="black">
        <Mission />
      </Box>
      <Box background="white" fill align="center" pad="medium">
        <Box elevation="medium" pad="large" round="small" gap="small" background="dark-1">
          <Box justify="center" direction="row" height="60px">
            <Typer text="hello, world!" duration="300" delay="3000" />
          </Box>
          <Paragraph>
            We all remember the moment in the time that inspired us to pursue a
            hobby, passion, and/or career. One of the most common for us was
            seeing "hello, world!" display on a computer screen.
          </Paragraph>
        </Box>
      </Box>
      <Box fill background="white" pad={{ bottom: "small" }}>
        <TextImage
          flip
          text="Our content and services are designed to assist those that have a passion for teaching others about technology."
          image={image.about1.childImageSharp.fluid}
        />
      </Box>
      <Box
        direction="row"
        gap="small"
        background="white"
        fill
        justify="center"
        pad="small"
      >
        <Link to="/blog">
          <Button label="Blog" color="black" />
        </Link>
        <Link to="/services">
          <Button label="Services" color="black" />
        </Link>
        <Link to="/projects">
          <Button label="Projects" color="black" />
        </Link>
      </Box>
      <Box fill background="white" pad={{ bottom: "small" }}>
        <TextImage
          text="Our projects are a way for us to create, build, and explore new technologies; leaving the technical world a little better than we found it."
          image={image.shapes.childImageSharp.fluid}
        />
      </Box>
      <Box pad={{ vertical: "large" }}>
        <Box gap="medium">
          <IconText icon={<Deploy />} text="We are this ..." />
          <IconText icon={<Deploy />} text="We are this and this..." />
          <IconText icon={<Deploy />} text="We are this  and not this..." />
          <IconText icon={<Deploy />} text="But sometimes are this ..." />
          <IconText icon={<Deploy />} text="We are this ..." />
          <IconText icon={<Deploy />} text="We are this ..." />
        </Box>
      </Box>
      <Contact />
    </Layout>
  )
}
