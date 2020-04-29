import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Box, Button, Footer } from "grommet"

import { Twitter, Instagram, Github } from "grommet-icons"

const SiteLink = styled(Link)`
  font-family: "Rokkitt";
  text-decoration: none;
  color: gray;
`

export default () => (
  <Footer background="dark-1" pad="medium">
    <SiteLink to="/about">About Simple Stuff</SiteLink>
    <SiteLink to="/services">Services We Provide</SiteLink>
    <SiteLink to="/contact">Contact Us</SiteLink>
    <Box direction="row" gap="small">
      <Button>
        <Twitter />
      </Button>
      <Button>
        <Instagram />
      </Button>
      <Button>
        <Github />
      </Button>
    </Box>
  </Footer>
)
