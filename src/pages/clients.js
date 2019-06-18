import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import clientStyles from "../styles/client.module.scss"

const ClientPage = (props) => (
  <Layout>
    <SEO title="Clients" />
    <div className={clientStyles.container}>
      <div className={clientStyles.testimonials}>

        <div className={clientStyles.clientCard}>
          <div className={clientStyles.client}>
            <FontAwesomeIcon icon={faDog} className={clientStyles.clientLogo} />
            <p>Client Name</p>
          </div>
          <p className={clientStyles.blurb}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium molestias fugiat eligendi doloremque reiciendis vero magni dolorem. Earum deleniti vitae inventore voluptatem cumque. Commodi quasi necessitatibus quod earum neque!"</p>
        </div>
        <div className={clientStyles.clientCard}>
          <div className={clientStyles.client}>
            <FontAwesomeIcon icon={faDog} className={clientStyles.clientLogo} />
            <p>Client Name</p>
          </div>
          <p className={clientStyles.blurb}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium molestias fugiat eligendi doloremque reiciendis vero magni dolorem. Earum deleniti vitae inventore voluptatem cumque. Commodi quasi necessitatibus quod earum neque!"</p>
        </div>
        <div className={clientStyles.clientCard}>
          <div className={clientStyles.client}>
            <FontAwesomeIcon icon={faDog} className={clientStyles.clientLogo} />
            <p>Client Name</p>
          </div>
          <p className={clientStyles.blurb}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium molestias fugiat eligendi doloremque reiciendis vero magni dolorem. Earum deleniti vitae inventore voluptatem cumque. Commodi quasi necessitatibus quod earum neque!"</p>
        </div>
      </div>

    </div>
  </Layout>
)

export default ClientPage

// export const pageQuery = graphql`
//   query {
//     tom: file(relativePath: { eq: "tom.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `