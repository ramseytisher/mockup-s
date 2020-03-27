import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

import { API } from "aws-amplify"

import Email from "../components/contact/email"
import Social from "../components/contact/social"

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
        justify="center"
        direction="row-responsirve"
        fill
        background="white"
        align="start"
        pad="small"
      >
        <Email />
        <Social />
      </Box>

      {/* <Box>this is how you contact us</Box>
      <Button label="Boom" onClick={contact} /> */}
    </Layout>
  )
}
