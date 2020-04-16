import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// import SEO from "../components/seo"
import Layout from "../components/layout"

import indexStyles from "../styles/index.module.scss"

const IndexPage = (props) => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div className={indexStyles.workGrid}>
      <a href="https://youtu.be/v0m3M6vDoOE" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.mitsubishi_shogun.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Shogun Inspire TVC</h3>
              <p>Mitsubishi</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://youtu.be/hZuNrILZwdU" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.admiral_recruitment.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Recruitment</h3>
              <p>Admiral</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://youtu.be/jk3nMm6ZNbc" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.cellular_agriculture_casestudy.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Case Study</h3>
              <p>Cellular Agriculture</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://youtu.be/gu65pE7sF40" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.carterwood_analytics.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Carterwood Analytics</h3>
              <p>Carterwood</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://youtu.be/fCdtFZChvXM" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.gs_wales40.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Wales 4.0</h3>
              <p>Golley Slater</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://youtu.be/GLmKAZOxbUw" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.uwe_education.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Education</h3>
              <p>UWE</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://youtu.be/ItvBrgvmgSU" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.ipgroup_ditto_ai.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Ditto AI</h3>
              <p>IP Group</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://youtu.be/dispqhquFNA" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.vitamix_viral.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Viral Campaign</h3>
              <p>Vitamix</p>
            </div>
          </div>
        </div>
      </a>

    </div>
  </Layout>
)

export default IndexPage

export const projectImage = graphql`
  fragment projectImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    mitsubishi_shogun: file(relativePath: { eq: "mitsubishi_shogun.jpg" }) {
      ...projectImage
    }

    admiral_recruitment: file(relativePath: { eq: "admiral_recruitment.jpg" }) {
      ...projectImage
    }

    cellular_agriculture_casestudy: file(relativePath: { eq: "cellular_agriculture_casestudy.jpg" }) {
      ...projectImage
    }

    carterwood_analytics: file(relativePath: { eq: "carterwood_analytics.jpg" }) {
      ...projectImage
    }

    gs_wales40: file(relativePath: { eq: "gs_wales40.jpg" }) {
      ...projectImage
    }

    uwe_education: file(relativePath: { eq: "uwe_education.jpg" }) {
      ...projectImage
    }

    ipgroup_ditto_ai: file(relativePath: { eq: "ipgroup_ditto_ai.jpg" }) {
      ...projectImage
    }

    vitamix_viral: file(relativePath: { eq: "vitamix_viral.jpg" }) {
      ...projectImage
    }

    conifers: file(relativePath: { eq: "conifers.jpg" }) {
      ...projectImage
    }
  }
`