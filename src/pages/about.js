import React from "react"
import { graphql } from "gatsby"
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
          <Img fluid={props.data.tom_profile.childImageSharp.fluid} className={aboutStyles.aboutImage} />
        </div>
        <div className={aboutStyles.blurb}>
          <p>Hey, I'm Tom <span role="img" aria-label="Smile">&#128522;</span></p>
          <p>I started my career at one of Wales' foremost video production agencies, working as an Editor and Camera Operator, whilst developing as a multi-skilled creative.</p>
          <p>I have {new Date().getFullYear() - new Date(2014)} years experience working within the digital video space, delivering campaigns for clients such as Land Rover, Yankee Candle, Mitsubishi, The National Trust, Barclays, Admiral and many more.</p>
        </div>
      </div>

      <hr className={aboutStyles.line}></hr>
      
      <div className={aboutStyles.formContainer}>
        <h2>Contact</h2>
        <form className={aboutStyles.contactForm} name="tsvideo-contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="tsvideo-contact" />
          <div className={aboutStyles.formGroup}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Full Name" />
          </div>
          <div className={aboutStyles.formGroup}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email Address" />
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
    tom_profile: file(relativePath: { eq: "tom_profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`