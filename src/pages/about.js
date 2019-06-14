import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Tom Smith" />
    {/* <Image /> */}
    <h1>About</h1>
    <p>A filmmaker with an impressive background in digital and social campaigns.</p>
    <p>Tom plunged himself into an extended internship with one of Wales' foremost video production agencies, honing his craft and developing as a multi-skilled creative.</p>
    <p>Tom has {new Date().getFullYear() - new Date(2014)} years' experience working within the digital video space, delivering campaigns for clients such as Admiral, Land Rover, Yankee Candle, Mitsubishi and The National Trust.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
