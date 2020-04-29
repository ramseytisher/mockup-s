import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import styled from "styled-components"
import Sitemap from "./sitemap"
import Navigation from "./navigation"
import Img from "gatsby-image"

import { Grommet, Box } from "grommet"

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
      "accent-1": "#F39237",
    },
    font: {
      family: "Ubuntu",
      size: "18px",
      height: "20px",
    },
  },
}

const NavHeading = styled(Link)`
  text-decoration: none;
`

interface Props {
  children: any
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "simple-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Grommet theme={theme} full>
      <Box overflow="hidden" background="black">
        <Box
          direction="row"
          align="center"
          justify="between"
          background="white"
          pad={{ horizontal: "medium", vertical: "small" }}
        >
          <NavHeading to="/">
            <Box width="small">
              <Img fluid={data.logo.childImageSharp.fluid} />
            </Box>
          </NavHeading>
          <Navigation />
        </Box>
        <Box align="center">{children}</Box>
        <Box>
          <Sitemap />
        </Box>
      </Box>
    </Grommet>
  )
}

export default Layout
