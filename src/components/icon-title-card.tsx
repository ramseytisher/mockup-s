import React from "react"

import { Box, Heading, Text } from "grommet"

interface Props {
  title: string
  text: string
  icon: any
}

const IconTitleCard = ({ title, text, icon }: Props) => (
  <Box pad="medium" width={{ max: "250px" }} align="center" gap="small">
    {icon}
    <Heading level={4} margin="none">
      {title}
    </Heading>
    <Text size="small">{text}</Text>
  </Box>
)

export default IconTitleCard
