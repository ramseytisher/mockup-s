import React, { ReactElement } from "react"

import { Box, Button, Heading, Text } from "grommet"
import { MailOption, Twitter, Instagram, Github } from "grommet-icons"

interface Props {
  elevate?: boolean
}
export default ({ elevate }: Props) => (
  <Box
    width="medium"
    elevation={elevate && "small"}
    pad="medium"
    gap="medium"
  >
    <Heading margin="none">Email Us</Heading>
    <Text>Feel free to send us an email to get more information</Text>
    <Box>
      <Button
        icon={<MailOption />}
        plain
        label="Email"
        margin="small"
        href="mailto:ramseytisher@gmail.com"
      />
    </Box>
  </Box>
)
