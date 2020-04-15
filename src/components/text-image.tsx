import React from "react"
import { Box, Grid, Paragraph, Heading, ResponsiveContext } from "grommet"
import Img from "gatsby-image"
import styled from "styled-components"

const RoundedImageLeft = styled(Img)`
  border-radius: 25px 0px 0px 25px;
  max-height: 25vw;
  margin-top: 10px;
`

const RoundedImageRight = styled(Img)`
  border-radius: 0px 25px 25px 0px;
  max-height: 25vw;
  margin-top: 10px;
`

interface Props {
  title?: string
  text: string
  image?: any
  textSize?: string
  flip?: boolean
  background?: boolean
}

export default ({ title, text, image, textSize, flip, background }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box background={background && background} fill pad={{ bottom: "small" }}>
        <Grid
          fill
          columns={{
            count: size === "small" ? 1 : 2,
            size: "auto",
          }}
        >
          {flip ? (
            <>
              <Box justify="center">
                {size === "small" ? (
                  <Img fluid={image} />
                ) : (
                  <RoundedImageRight fluid={image} />
                )}
              </Box>
              <Box align="center" justify="center">
                {title && (
                  <Heading level={3} alignSelf="center" margin="small">
                    {title}
                  </Heading>
                )}
                <Paragraph textAlign="center" margin="medium">
                  {text}
                </Paragraph>
              </Box>
            </>
          ) : (
            <>
              <Box align="center" justify="center">
                {title && (
                  <Heading level={3} alignSelf="center" margin="small">
                    {title}
                  </Heading>
                )}
                <Paragraph textAlign="center" margin="medium">
                  {text}
                </Paragraph>
              </Box>
              <Box justify="center">
                {size === "small" ? (
                  <Img fluid={image} />
                ) : (
                  <RoundedImageLeft fluid={image} />
                )}
              </Box>
            </>
          )}
        </Grid>
      </Box>
    )}
  </ResponsiveContext.Consumer>
)

/* Working sample for usage
<Split 
  text="Lorem ipsum dolor amet ugh humblebrag pinterest vaporware, everyday carry hell of godard DIY before they sold out craft beer sriracha four dollar toast next level. Williamsburg stumptown gentrify photo booth occupy man bun. Cornhole gochujang whatever, la croix hella hoodie green juice hammock health goth migas ennui normcore austin. Freegan etsy roof party tattooed fixie."
  image={this.props.data.hero.childImageSharp.fluid}
  dark
/>
<Split 
  text="Lorem ipsum dolor amet ugh humblebrag pinterest vaporware, everyday carry hell of godard DIY before they sold out craft beer sriracha four dollar toast next level. Williamsburg stumptown gentrify photo booth occupy man bun. Cornhole gochujang whatever, la croix hella hoodie green juice hammock health goth migas ennui normcore austin. Freegan etsy roof party tattooed fixie."
  image={this.props.data.hero.childImageSharp.fluid} 
  flip
/>
*/
