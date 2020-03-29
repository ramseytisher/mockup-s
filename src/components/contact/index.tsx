import React from "React"

import Email from "./email"
import Social from "./social"

import { Box } from "grommet"

export default () => (
  <Box
    pad="large"
    fill
    direction="row-responsirve"
    align="start"
    justify="center"
    wrap
    gap="large"
  >
    <Email elevate={false} />
    <Social elevate={false} />
  </Box>
)
