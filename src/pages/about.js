import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import aboutStyles from "../styles/about.module.scss"

const AboutPage = (props) => (
  <Layout>
    <SEO title="About Tom Smith" />
    <div className={aboutStyles.container}>
      <div>
        <Img fluid={props.data.tom.childImageSharp.fluid} />
      </div>
      <div className={aboutStyles.blurb}>
        <p>A filmmaker with an impressive background in digital and social campaigns.</p>
        <p>Tom plunged himself into an extended internship with one of Wales' foremost video production agencies, honing his craft and developing as a multi-skilled creative.</p>
        <p>Tom has {new Date().getFullYear() - new Date(2014)} years experience working within the digital video space, delivering campaigns for clients such as Admiral, Land Rover, Yankee Candle, Mitsubishi and The National Trust.</p>
      </div>
      {/* Contact form */}
    </div>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query {
    tom: file(relativePath: { eq: "tom.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`