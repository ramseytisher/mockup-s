import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import { ResponsiveContext, Button, Box, Layer } from "grommet"
import { Menu, Close, Test, Article } from "grommet-icons"

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Rokkitt";
  color: black;

  &:hover {
    border-bottom: 5px solid orange;
  }
`

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <ResponsiveContext.Consumer>
      {size => {
        if (size === "small") {
          return (
            <>
              <Button
                icon={showMenu ? <Close /> : <Menu />}
                onClick={() => setShowMenu(!showMenu)}
              />
              {showMenu && (
                <Layer
                  onEsc={() => setShowMenu(false)}
                  onClickOutside={() => setShowMenu(false)}
                  responsive={false}
                >
                  <Box pad="large" gap="large" align="center">
                    <NavLink to="/blog">
                      [ Our Blog {<Article size="1.1em" />} ]
                    </NavLink>
                    <NavLink to="/the-lab">
                      [ The Lab {<Test size="1.1em" />} ]
                    </NavLink>

                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">
                      <Button label="Contact Us" hoverIndicator primary />
                    </NavLink>
                  </Box>
                </Layer>
              )}
            </>
          )
        } else {
          return (
            <Box
              direction="row"
              wrap
              gap="small"
              justify="center"
              align="center"
            >
              <Box
                direction="row-responsive"
                wrap
                align="center"
                justify="center"
                gap="small"
              >
                <NavLink to="/blog">
                  [ Our Blog {<Article size="1.1em" />} ]
                </NavLink>
                <NavLink to="/the-lab">
                  [ The Lab {<Test size="1.1em" />} ]
                </NavLink>

                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
              </Box>
              <Link to="/contact">
                <Button label="Contact Us" hoverIndicator primary />
              </Link>
            </Box>
          )
        }
      }}
    </ResponsiveContext.Consumer>
  )
}

export default Navigation
