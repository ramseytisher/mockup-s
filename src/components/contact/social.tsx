import React, { ReactElement } from "react"

import { Box, Button, Heading, Text } from "grommet"
import { MailOption, Twitter, Instagram, Github } from "grommet-icons"

export default ({ elevate }: Props) => (
  <Box
    direction="row-responsive"
    justify="evenly"
    elevation={elevate && "small"}
    pad="large"
    gap="medium"
  >
    <Box>
      <Heading level={3} margin="none">Find Us</Heading>
      <Text margin="xsmall">Follow us on popular these social media channels</Text>
    </Box>
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
