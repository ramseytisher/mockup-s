import React, { ReactElement } from "react"

import { Box, Button, Heading, Text } from "grommet"
import { MailOption, Twitter, Instagram, Github } from "grommet-icons"

export default ({ elevate }: Props) => (
  <Box
    width="medium"
    elevation={elevate && "small"}
    pad="medium"
    gap="medium"
  >
    <Heading margin="none">Find Us</Heading>
    <Text>Find us on popular social media channels</Text>
    <Box align="center">
      <Box align="start" gap="medium" margin="small">
        <Button
          plain
          icon={<Twitter />}
          label="Twitter"
          href="http://www.twitter.com/ramseytisher"
          target="_blank"
        />
        <Button plain icon={<Instagram />} label="Instagram" />
        <Button plain icon={<Github />} label="Github" />
      </Box>
    </Box>
  </Box>
)
