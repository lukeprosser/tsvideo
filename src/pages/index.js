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

      <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.conifers.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Client Name</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.conifers.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Client Name</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.conifers.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Client Name</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.conifers.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Client Name</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.conifers.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Client Name</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.conifers.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Client Name</p>
            </div>
          </div>
        </div>
      </a>

    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    conifers: file(relativePath: { eq: "conifers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`