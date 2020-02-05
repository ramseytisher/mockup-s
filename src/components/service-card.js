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

const ServiceStack = styled(Stack)`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9136029411764706) 0%,
    rgba(95, 94, 98, 0.8099614845938375) 26%,
    rgba(255, 255, 255, 0) 100%
  );
`

const ServiceImage = styled(Img)`
  height: 30vw;
  width: 400px;
`

const SmallImage = styled(Img)`
  height: 20vw;
  width: 200px;
`

export default ({ title, text, image }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box margin="small">
        {size === "small" ? (
          <Box align="center" direction="row" elevation="small" margin="small">
            <SmallImage fluid={image} />
            <Box pad="small">
              <Heading level={3} margin="none">
                {title}
              </Heading>
              <Text>{text}</Text>
            </Box>
          </Box>
        ) : (
          <Stack elevation="small" anchor="top">
            <ServiceImage fluid={image} />
            <ServiceBox pad="small" gap="small" align="center">
              <Heading level={2} margin="none" color="light-1">
                {title}
              </Heading>
              <Text color="light-1">{text}</Text>
            </ServiceBox>
          </Stack>
        )}
      </Box>
    )}
  </ResponsiveContext.Consumer>
)
