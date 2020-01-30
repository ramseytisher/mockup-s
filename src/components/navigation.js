import React from "react"
import { Link } from "gatsby"

import { Box, Button } from "grommet"

export default () => {
  return (
    <Box>
      <Link to="/services">/Services</Link>
      <Link to="/content">/Content</Link>
      <Link to="/projects">/Projects</Link>
      <Link to="/about">/About</Link>
      <Link to="/contact">/Contact</Link>
    </Box>
  )
}
