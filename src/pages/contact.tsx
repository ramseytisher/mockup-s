import React from "react"
import Layout from "../components/layout"

import Contact from "../components/contact"

import { Box } from "grommet"

// make this better: https://dev.to/adnanrahic/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses-4jm0

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
