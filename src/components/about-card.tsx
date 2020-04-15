import React from "react"

import { Box, Heading, Paragraph } from "grommet"

interface Props {
    title: string
    text: string
    icon: any
}

export default ({title, text, icon}: Props) => (
  <Box
    width="medium"
    background="dark-1"
    round
    pad="large"
    align="center"
  >
    {icon}
    <Heading level={3} alignSelf="center">
      {title}
    </Heading>
    <Paragraph margin="none" size="medium">
      {text}
    </Paragraph>
  </Box>
)
