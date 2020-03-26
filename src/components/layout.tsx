import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import styled from "styled-components"
import Sitemap from "./sitemap"

import {
  Grommet,
  ResponsiveContext,
  Button,
  Box,
  Grid,
  Heading
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
  color: white;

  &:hover {
    font-size: 1.15rem;
  }
`

interface Props {
  children: any
}

export default ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box overflow="hidden" background="black">
              <Box
                gridArea="header"
                direction="row"
                align="center"
                justify="between"
                background="black"
                pad={{ horizontal: "medium", vertical: "small" }}
              >
                <NavHeading to="/">
                  <Heading level="2" margin="none" color="white">
                    {data.site.siteMetadata.title}
                  </Heading>
                </NavHeading>
                {size === "small" ? (
                  <Button
                    icon={showSidebar ? <Close /> : <Menu />}
                    onClick={() => setShowSidebar(!showSidebar)}
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
              {showSidebar && (
                <Box
                  gridArea="sidebar"
                  gap="large"
                  pad="small"
                  width="small"
                  style={{ zIndex: 100 }}
                  background="light-2"
                  align="center"
                >
                  <NavLink to="/services">Services</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  <NavLink to="/projects">Projects</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </Box>
              )}
              <Box gridArea="main" align="center">
                {children}
              </Box>
              <Box gridArea="footer">
                <Sitemap />
              </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}
