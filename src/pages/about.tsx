import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Contact from "../components/contact"
import Typer from "../components/typer"
import TextImage from "../components/text-image"
import Mission from "../components/mission"

import { Box, Paragraph, Heading } from "grommet"

const AboutPage = () => {
  const image = useStaticQuery(graphql`
    query {
      about1: file(relativePath: { eq: "about1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shapes: file(relativePath: { eq: "shapes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <Box background="black">
        <Mission />
      </Box>
      <TextImage
        flip
        background="white"
        text="Our content and services are designed to assist those that have a passion for teaching others about technology."
        image={image.about1.childImageSharp.fluid}
      />
      <Box background="white" fill align="center" pad="medium">
        <Box
          elevation="medium"
          pad="large"
          round="small"
          gap="small"
          background="black"
        >
          <Box justify="center" direction="row" height="60px">
            <Typer text="hello, world!" duration="300" delay="3000" />
          </Box>
          <Paragraph size="large">
            {`We all remember the moment in the time that inspired us to pursue a
            hobby, passion, and/or career. One of the most common for us was
            seeing "hello, world!" display on a computer screen.`}
          </Paragraph>
        </Box>
      </Box>
      {/* <Box
        direction="row"
        gap="small"
        background="white"
        fill
        justify="center"
        pad="small"
      >
        <Link to="/blog">
          <Button label="Blog" color="black" />
        </Link>
        <Link to="/services">
          <Button label="Services" color="black" />
        </Link>
        <Link to="/projects">
          <Button label="Projects" color="black" />
        </Link>
      </Box> */}
      <TextImage
        text={`Our projects are a way for us to create, build, and explore new technologies; leaving the technical world a little better than we found it.`}
        image={image.shapes.childImageSharp.fluid}
        background="white"
      />
      <Box elevation="large" fill align="center">
        <Heading level={2}>Our Approach</Heading>
      </Box>
      <TextImage
        flip
        title="Projects Over Instruction"
        text={`Our content and services are designed to assist those that have a passion for teaching others about technology.`}
        image={image.about1.childImageSharp.fluid}
        background="white"
      />
      <TextImage
        title="Projects Over Instruction"
        text={`Our content and services are designed to assist those that have a passion for teaching others about technology.`}
        image={image.about1.childImageSharp.fluid}
        background="white"
      />
      <TextImage
        title="Projects Over Instruction"
        flip
        text={`Our content and services are designed to assist those that have a passion for teaching others about technology.`}
        image={image.about1.childImageSharp.fluid}
        background="white"
      />
      <TextImage
        title="Projects Over Instruction"
        text={`Our content and services are designed to assist those that have a passion for teaching others about technology.`}
        image={image.about1.childImageSharp.fluid}
        background="white"
      />
      {/* <Box
        direction="row-responsive"
        wrap
        fill
        background="white"
        pad="medium"
        justify="center"
        gap="medium"
      >
        <AboutCard
          title="Projects Over Instructions"
          text={`Move the needle herding cats gain traction so nail jelly to the
            hothouse wall we need a recap by eod, cob or whatever comes first.
            Radical candor. Keep it lean post launch for horsehead offer looks
            great, can we try it a different way, per my previous email or
            throughput.`}
          icon={<Deploy />}
        />
        <AboutCard
          title="Social over Individualized"
          text={`Move the needle herding cats gain traction so nail jelly to the
            hothouse wall we need a recap by eod, cob or whatever comes first.
            Radical candor. Keep it lean post launch for horsehead offer looks
            great, can we try it a different way, per my previous email or
            throughput.`}
          icon={<Deploy />}
        />
        <AboutCard
          title="Simple."
          text={`Move the needle herding cats gain traction so nail jelly to the
            hothouse wall we need a recap by eod, cob or whatever comes first.
            Radical candor. Keep it lean post launch for horsehead offer looks
            great, can we try it a different way, per my previous email or
            throughput.`}
          icon={<Deploy />}
        />
        <AboutCard
          title="Failure."
          text={`Move the needle herding cats gain traction so nail jelly to the
            hothouse wall we need a recap by eod, cob or whatever comes first.
            Radical candor. Keep it lean post launch for horsehead offer looks
            great, can we try it a different way, per my previous email or
            throughput.`}
          icon={<Deploy />}
        />
      </Box> */}
      {/* <Box elevation="large" fill align="center">
        <Heading level={2}>Technology area</Heading>
      </Box>
      <Box align="center" fill background="white" pad="medium">
        <Box gap="medium">
          <IconText icon={<Deploy />} text="Computer Science" />
          <IconText icon={<Deploy />} text="Robotics" />
          <IconText icon={<Deploy />} text="Computer-Aided Design" />
          <IconText icon={<Deploy />} text="3D Printing" />
          <IconText icon={<Deploy />} text="Solar Energy" />
          <IconText icon={<Deploy />} text="Raspberry Pi" />
          <IconText icon={<Deploy />} text="Information Security" />
        </Box>
      </Box> */}

      <Box background="white" fill>
        <Contact />
      </Box>
    </Layout>
  )
}

export default AboutPage
