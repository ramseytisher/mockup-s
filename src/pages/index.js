import React from "react"
import { useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TextBlock from "../components/text-block"
import Mission from "../components/mission"
import HeroStack from "../components/hero-stack"

import { Box } from "grommet"

const SiteLink = styled(Link)`
  font-family: "Bangers";
  text-decoration: none;
  color: gray;

  &:hover {
    font-size: 2rem;
  }
`

export default () => {
  const image = useStaticQuery(graphql`
    query {
      home: file(relativePath: { eq: "layer-boxes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <HeroStack
        image={image.home.childImageSharp.fluid}
        text="We make it simple"
      />
      <Box flex="grow" pad="small" gap="medium" justify="center" direction="row-responsive">
        <TextBlock
          title="Our This ... "
          background="dark-2"
          text="Some long form of text that would go here ..."
          link="/services"
          linkText="Our Services"
        />
        <Box align="center">
            <Mission />
            <SiteLink to="/about">More about us</SiteLink>
        </Box>
        <TextBlock
          title="Our What ???"
          background="dark-2"
          text="Some long form of text that would go here ..."
          link="/blog"
          linkText="Our Blog"
        />
      </Box>
    </Layout>
  )
}
