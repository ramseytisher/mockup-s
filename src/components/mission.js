import React from "react"
import styled from "styled-components"

import { Box, Heading, Text } from "grommet"

const MissionText = styled(Text)`
    font-family: 'Bangers';
    max-width: 40vw;
`

export default ({ title, text, background }) => (
  <Box pad="medium" justify="center" align="center">
    <MissionText textAlign="center" size="xlarge">
      Some form of long text that describes who we are and why we are here ...
    </MissionText>
  </Box>
)
