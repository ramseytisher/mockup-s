import React, { useState, useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import styled from "styled-components"

import Navigation from "./navigation"

import {
  Grommet,
  ResponsiveContext,
  Button,
  Box,
  Heading,
  Collapsible,
} from "grommet"
import { Menu, Close } from "grommet-icons"

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
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

const NavLink = styled(Link)`
  text-decoration: none;
  color: gray;

  &:hover {
    color: black;
    font-size: 1.15rem;
  }
`

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [showNav, setShowNav] = useState(false)

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <Box
              tag="header"
              direction="row"
              align="center"
              justify="between"
              background="light-1"
              pad={{ left: "medium", right: "small", vertical: "small" }}
              elevation="small"
              style={{ zIndex: "1" }}
            >
              <NavHeading to="/">
                <Heading level="2" margin="none" color="dark-1">
                  {data.site.siteMetadata.title}
                </Heading>
              </NavHeading>

              {size === "small" ? (
                <Button
                  icon={showNav ? <Close /> : <Menu />}
                  onClick={() => setShowNav(!showNav)}
                />
              ) : (
                <Box direction="row" gap="medium">
                  <NavLink to="/services">Services</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/projects">Projects</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </Box>
              )}
            </Box>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                {children}
              </Box>
              {size === "small" && (
                <Collapsible direction="horizontal" open={showNav}>
                  <Box gap="large" pad="large" background="light-3" fill>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </Box>
                </Collapsible>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}
