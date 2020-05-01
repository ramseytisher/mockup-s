import React, { useState } from "react"

import { Box, Button, Layer } from "grommet"

interface Props {
  text: string
  detail?: React.Component
}

const ContactCard = ({ text, detail }: Props) => {
  const [showDetail, setShowDetail] = useState(false)

  const openDetail = () => setShowDetail(true)
  const closeDetail = () => setShowDetail(false)

  return (
    <Box
      fill
      pad={{ horizontal: "medium", vertical: "large" }}
      background="dark-1"
      align="center"
      justify="center"
      elevation="small"
      round="xsmall"
      onClick={openDetail}
      hoverIndicator={{ color: "brand" }}
    >
      {text}
      {showDetail && (
        <Layer
          onEsc={closeDetail}
          onClickOutside={closeDetail}
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

export default ContactCard
