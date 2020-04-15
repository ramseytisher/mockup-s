import React, { useState } from "react"

import { Box, Button, Layer } from "grommet"

interface Props {
  text: string
  detail?: React.Component
}

export default ({ text, detail }: Props) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <Box
      fill
      pad={{ horizontal: "medium", vertical: "large" }}
      background="dark-1"
      align="center"
      justify="center"
      elevation="small"
      round="xsmall"
      onClick={() => setShowDetail(!showDetail)}
      hoverIndicator={{ color: "brand" }}
    >
      {text}
      {showDetail && (
        <Layer
          onEsc={() => setShowDetail(false)}
          onClickOutside={() => setShowDetail(false)}
          position="bottom-right"
          responsive={false}
        >
          <Box pad="large" width="large">
            {detail ? detail : "We're still working on this ..."}
          </Box>
        </Layer>
      )}
    </Box>
  )
}
