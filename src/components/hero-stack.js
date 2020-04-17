import React from "react"
import { Heading, Stack, Box } from "grommet"
import Img from "gatsby-image"
import styled from "styled-components"

const HeroBox = styled(Box)`
  object-fit: cover;
`

const HeroImage = styled(Img)`
  height: 70vh;
  width: 100vw;
  opacity: 0.5;
`

const HeroHeading = styled(Heading)`
  font-family: "Ubuntu";
  color: #595959;
  font-size: 10vh;
  line-height: 70px;
  text-align: center;
  backdrop-filter: blur(6px);
`

export default ({ text, image, textSize, flip, dark }) => (
  <Stack anchor="center">
    <HeroBox>
      <HeroImage fluid={image} />
    </HeroBox>
    <HeroHeading margin="none">{text}</HeroHeading>
  </Stack>
)
