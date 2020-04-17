import React from "react"
import Layout from "../components/layout"

import Contact from "../components/contact"

import { Box } from "grommet"

const ContactPage = () => (
  <Layout>
    <Box
      justify="center"
      direction="row-responsirve"
      fill
      background="white"
      wrap
    >
      <Contact />
    </Box>
  </Layout>
)

export default ContactPage
