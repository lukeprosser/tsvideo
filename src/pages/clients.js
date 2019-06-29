import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import clientStyles from "../styles/clients.module.scss"

const ClientPage = (props) => (
  <Layout>
    <SEO title="Clients" />
    <div className={clientStyles.container}>
      <div className={clientStyles.testimonials}>

          <div className={clientStyles.client1}>
            <FontAwesomeIcon icon={faDog} className={clientStyles.clientLogo} />
            <p className={clientStyles.clientName}>Client Name</p>
          </div>
          <p className={clientStyles.blurb1}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium molestias fugiat eligendi doloremque reiciendis vero magni dolorem. Earum deleniti vitae inventore voluptatem cumque. Commodi quasi necessitatibus quod earum neque!"</p>
        
          <div className={clientStyles.client2}>
            <FontAwesomeIcon icon={faDog} className={clientStyles.clientLogo} />
            <p className={clientStyles.clientName}>Client Name</p>
          </div>
          <p className={clientStyles.blurb2}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium molestias fugiat eligendi doloremque reiciendis vero magni dolorem. Earum deleniti vitae inventore voluptatem cumque. Commodi quasi necessitatibus quod earum neque!"</p>
        
          <div className={clientStyles.client3}>
            <FontAwesomeIcon icon={faDog} className={clientStyles.clientLogo} />
            <p className={clientStyles.clientName}>Client Name</p>
          </div>
          <p className={clientStyles.blurb3}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium molestias fugiat eligendi doloremque reiciendis vero magni dolorem. Earum deleniti vitae inventore voluptatem cumque. Commodi quasi necessitatibus quod earum neque!"</p>
        
      </div>

    </div>
  </Layout>
)

export default ClientPage