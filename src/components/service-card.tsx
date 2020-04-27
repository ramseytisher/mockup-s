import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Box, Heading, Text, ResponsiveContext } from "grommet"

interface Props {
  title: string
  text: string
  button?: any
}

const ServiceCard = ({ title, text, button }: Props) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        pad="medium"
        animation="slideUp"
        round="small"
        gap="small"
        margin="xsmall"
        elevation="medium"
        width={size !== "small" && "medium"}
      >
        <Heading level={3} margin="xsmall">
          {title} {size}
        </Heading>
        <Box height={size !== "small" && "small"}>
          <Text>{text}</Text>
        </Box>
        {button && button}
      </Box>
    )}
  </ResponsiveContext.Consumer>
)

export default ServiceCard
