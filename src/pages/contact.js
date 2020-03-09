import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

import { API } from "aws-amplify"

import { Box, Button, Heading, Text } from "grommet"
import { MailOption, Twitter, Instagram, Github } from "grommet-icons"

export default () => {
  // async function contact() {
  //   try {
  //     const data = await API.post('mainmockupsapi', '/contact', { body: { name: 'Ramsey', email: 'blah@email.com', message: 'asdfsadf', phone: '5555555555'}})
  //     console.log('contactData', data)
  //   } catch (err) { console.log('Error: ', err) }
  // }

  return (
    <Layout>
      <Box
        margin="medium"
        pad="large"
        justify="center"
        width="95vw"
        height="large"
      >
        <Box margin="large" gap="small">
          <Heading margin="none">Email Us</Heading>
          <Text>Feel free to send us an email to get more information</Text>
          <Button
            icon={<MailOption />}
            plain
            label="Email"
            href="mailto:ramseytisher@gmail.com"
          />
        </Box>
        <Box margin="large" gap="small">
          <Heading margin="none">Find Us</Heading>
          <Text>Find us on popular social media channels</Text>
          <Box
            pad="medium"
            direction="row-responsive"
            wrap
            gap="large"
            justify="between"
          >
            <Button
              plain
              icon={<Twitter />}
              label="Twitter"
              href="http://www.twitter.com/ramseytisher"
              target="_blank"
            />
            <Button plain icon={<Instagram />} label="Instagram" />
            <Button plain icon={<Github />} label="Github" />
          </Box>
        </Box>
      </Box>

      {/* <Box>this is how you contact us</Box>
      <Button label="Boom" onClick={contact} /> */}
    </Layout>
  )
}
