import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Box, Stack, Heading, Text, ResponsiveContext } from "grommet"

const ServiceBox = styled(Box)`
  width: 400px;
  background: linear-gradient(
    180deg,
    rgba(79, 79, 79, 0.8071603641456583) 0%,
    rgba(79, 79, 79, 0.6558998599439776) 81%,
    rgba(255, 255, 255, 0) 100%
  );
`

const ServiceImage = styled(Img)`
  height: 30vw;
  width: 400px;
`

const SmallImage = styled(Img)`
  height: 100px;
  width: 100px;
`

interface Props {
  title: string
  text: string
  image?: any
  button?: any
}

export default ({ title, text, image, button }: Props) => (
  <ResponsiveContext.Consumer>
    {size => (
      // <Box margin="small">
      //   {size === "small" ? (
      //     <Box align="center" direction="row" elevation="small" margin="small">
      //       <SmallImage fluid={image} />
      //       <Box pad="medium">
      //         <Heading level={3} margin="none">
      //           {title}
      //         </Heading>
      //         <Text>{text}</Text>
      //       </Box>
      //     </Box>
      //   ) : (
      //     <Stack elevation="small" anchor="top">
      //       <ServiceImage fluid={image} />
      //       <ServiceBox pad="small" gap="small" align="center">
      //         <Heading level={2} margin="none" color="light-1">
      //           {title}
      //         </Heading>
      //         <Text color="light-1">{text}</Text>
      //       </ServiceBox>
      //     </Stack>
      //   )}
      // </Box>
      <Box
        pad="large"
        animation="slideUp"
        round="small"
        gap="small"
        elevation="medium"
        width={size !== "small" && "medium"}
      >
        <Heading level={2} margin="small">
          {title}
        </Heading>
        <Box height={size !== "small" && "small"}>
          <Text>{text}</Text>
        </Box>
        {button && button}
      </Box>
    )}
  </ResponsiveContext.Consumer>
)
