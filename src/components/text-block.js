import React from 'react'

import { Box, Heading, Text } from 'grommet'

export default ({title, text, background}) => (
    <Box background={background} pad="large" round="xsmall" elevation="medium" >
        <Heading margin="none" level={3}>{title}</Heading>
        <Text>{text}</Text>
    </Box>

)