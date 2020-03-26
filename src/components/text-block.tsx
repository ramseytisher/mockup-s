import React from "react"
import { Link } from "gatsby"

import { Box, Heading, Text, Button } from "grommet"

interface Props {
  title: string
  text: string
  background: string
  link?: string
  linkText?: string
}

export default ({ title, text, background, link, linkText }) => (
  <Box background={background} pad="medium" align="center" justify="evenly" round="xsmall" elevation="medium">
    <Heading margin="none" level={3}>
      {title}
    </Heading>
    <Text>{text}</Text>
    {link && (
      <Link to={link}>
        <Button margin="small" label={linkText} />
      </Link>
    )}
  </Box>
)
