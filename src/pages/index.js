import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import indexStyles from "../styles/index.module.scss"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.workGrid}>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} />
      </div>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} />
      </div>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} />
      </div>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} />
      </div>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} />
      </div>
      <div className={indexStyles.workGridItem}>
        <Img fluid={props.data.skate.childImageSharp.fluid} />
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