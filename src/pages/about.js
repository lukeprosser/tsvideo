import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import aboutStyles from "../styles/about.module.scss"

const AboutPage = (props) => (
  <Layout>
    <SEO title="About" />
    <div className={aboutStyles.container}>
      <div className={aboutStyles.aboutContainer}>
        <div>
          <Img fluid={props.data.tom.childImageSharp.fluid} className={aboutStyles.aboutImage} />
        </div>
        <div className={aboutStyles.blurb}>
          <p>A filmmaker with an impressive background in digital and social campaigns.</p>
          <p>Tom plunged himself into an extended internship with one of Wales' foremost video production agencies, honing his craft and developing as a multi-skilled creative.</p>
          <p>Tom has {new Date().getFullYear() - new Date(2014)} years experience working within the digital video space, delivering campaigns for clients such as Admiral, Land Rover, Yankee Candle, Mitsubishi and The National Trust.</p>
        </div>
      </div>

      <hr className={aboutStyles.line}></hr>
      
      <div className={aboutStyles.formContainer}>
        <h2>Contact</h2>
        <form className={aboutStyles.contactForm} name="tsvideo-contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div className={aboutStyles.formGroup}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Full Name" />
          </div>
          <div className={aboutStyles.formGroup}>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email Address" />
          </div>
          <div className={aboutStyles.formGroup}>
            <label>Message</label>
            <textarea name="message" rows="3" placeholder="Message"></textarea>
          </div>
          <button type="submit" name="submit" className="btn full">Submit</button>
        </form>
      </div>
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