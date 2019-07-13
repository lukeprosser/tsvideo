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
          <Img fluid={props.data.mitsubishi.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Mitsubishi</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.cellular_agriculture.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Cellular Agriculture</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.sportwales.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Sport Wales</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.ipgroup.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>IP Group</p>
            </div>
          </div>
        </div>
      </a>
      <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.wales40.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Wales 4.0</p>
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
              <p>UWE</p>
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
              <p>Apprenticeship Wales</p>
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
              <p>Admiral Recruitment</p>
            </div>
          </div>
        </div>
      </a>
      {/* <a href="https://vimeo.com/channels/skateboarding/65899061" target="_blank" rel="noopener noreferrer">
        <div className={indexStyles.workGridItem}>
          <Img fluid={props.data.conifers.childImageSharp.fluid} className={indexStyles.image} />
          <div className={indexStyles.imageOverlay}>
            <div className={indexStyles.imageOverlayText}>
              <h3>Project Name</h3>
              <p>Carterwood Analytics</p>
            </div>
          </div>
        </div>
      </a> */}

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
    mitsubishi: file(relativePath: { eq: "mitsubishi.jpg" }) {
      ...projectImage
    }

    cellular_agriculture: file(relativePath: { eq: "cellular_agriculture.jpg" }) {
      ...projectImage
    }

    sportwales: file(relativePath: { eq: "sportwales.jpg" }) {
      ...projectImage
    }

    ipgroup: file(relativePath: { eq: "ipgroup.jpg" }) {
      ...projectImage
    }

    wales40: file(relativePath: { eq: "wales40.jpg" }) {
      ...projectImage
    }

    conifers: file(relativePath: { eq: "conifers.jpg" }) {
      ...projectImage
    }
  }
`

// export const pageQuery = graphql`
//   query {
//     conifers: file(relativePath: { eq: "conifers.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `