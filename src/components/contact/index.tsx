import React from "react"

import Email from "./email"
import Social from "./social"
import ContactCard from "./card"

import { Grid, Box, Heading } from "grommet"

const Contact = () => (
  <Box fill pad="small">
    <Heading level={2} margin="xsmall" alignSelf="center">
      How can we help?
    </Heading>
    <Grid
      gap="small"
      pad="large"
      justify="center"
      columns={{ count: 2, size: "auto" }}
    >
      <ContactCard
        text="You want to see if we can help you"
        detail={<Email />}
      />
      <ContactCard text="You have an idea for a project" />
      <ContactCard text="You just want to follow us" detail={<Social />} />
      <ContactCard text="You want to receive updates" />
      <ContactCard text="You just want to say Hi!" />
      <ContactCard text="You are having trouble with our site" />
    </Grid>
  </Box>
)

export default Contact

// import React, { useState } from "React"

// import Email from "./email"
// import Social from "./social"
// import ContactCard from "./card"

// import { Grid, Box } from "grommet"

// export default () => {
//   const [showEmail, setShowEmail] = useState(false)
//   const [showSocial, setShowSocial] = useState(false)

//   return (
//     <Grid
//       gap="small"
//       pad="large"
//       justify="center"
//       columns={{ count: 2, size: "auto" }}
//     >
//       <ContactCard text="You want to see if we can help you" />
//       <ContactCard text="You just want to follow us" />
//       <ContactCard text="You want to receive updates" />
//       <ContactCard text="You just want to say Hi!" />
//       <ContactCard text="You are having trouble with our site" />
//       {showEmail && <div>email</div>}
//       {showSocial && <div>social</div>}
//     </Grid>
//   )
// }
