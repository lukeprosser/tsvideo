import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyles from "../styles/index.module.scss"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.workGrid}>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} className={indexStyles.image} />
        <div className={indexStyles.imageOverlay}>
          <div className={indexStyles.imageOverlayText}>
            <h3><a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">Project Name</a></h3>
            <p>Client Name</p>
          </div>
        </div>
      </div>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} className={indexStyles.image} />
        <div className={indexStyles.imageOverlay}>
          <div className={indexStyles.imageOverlayText}>
            <h3><a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">Project Name</a></h3>
            <p>Client Name</p>
          </div>
        </div>
      </div>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} className={indexStyles.image} />
        <div className={indexStyles.imageOverlay}>
          <div className={indexStyles.imageOverlayText}>
            <h3><a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">Project Name</a></h3>
            <p>Client Name</p>
          </div>
        </div>
      </div>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} className={indexStyles.image} />
        <div className={indexStyles.imageOverlay}>
          <div className={indexStyles.imageOverlayText}>
            <h3><a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">Project Name</a></h3>
            <p>Client Name</p>
          </div>
        </div>
      </div>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} className={indexStyles.image} />
        <div className={indexStyles.imageOverlay}>
          <div className={indexStyles.imageOverlayText}>
            <h3><a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">Project Name</a></h3>
            <p>Client Name</p>
          </div>
        </div>
      </div>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} className={indexStyles.image} />
        <div className={indexStyles.imageOverlay}>
          <div className={indexStyles.imageOverlayText}>
            <h3><a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">Project Name</a></h3>
            <p>Client Name</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    skate: file(relativePath: { eq: "skate.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`