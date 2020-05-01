import React, { ReactElement } from "react"

import { Box, Button, Heading, Text } from "grommet"
import { MailOption, Twitter, Instagram, Github } from "grommet-icons"

import Form from "./form"

interface Props {
  elevate?: boolean
}

const ContactEmail = ({ elevate }: Props) => (
  <Box
    direction="row"
    width="large"
    elevation={elevate && "small"}
    pad="large"
    gap="medium"
    justify="evenly"
  >
    <Box>
      <Heading level={3} margin="none">
        Email Us
      </Heading>
      <Text margin="small">
        Feel free to send us an email to get more information
      </Text>
    </Box>
    <Box justify="center">
      <Form />
    </Box>
  </Box>
)

export default ContactEmail