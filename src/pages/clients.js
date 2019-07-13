import React from "react"

import landrover_logo from "../images/landrover_logo.png"
import yankeecandle_logo from "../images/yankeecandle_logo.png"
import uwe_logo from "../images/uwe_logo.png"
import admiral_logo from "../images/admiral_logo.png"
import mitsubishi_logo from "../images/mitsubishi_logo.png"

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
          </div>
          <div className={clientStyles.blurb1}>
            <p className={clientStyles.clientTestimonial}>"Working with Tom continues to be a joy. His skills as a bold filmmaker and quickfire editor are hugely valuable to our clients, while his devotion to each and every project is unsurpassed. Tom is a craftsman with a wonderfully easy-going nature - making the many projects we’ve undertaken together a breeze to deliver."</p>
            <p className={clientStyles.clientContact}>Owen Williams, Managing Director</p>
          </div>
          
        
          <div className={clientStyles.client2}>
            <FontAwesomeIcon icon={faDog} className={clientStyles.clientLogo} />
          </div>
          <div className={clientStyles.blurb1}>
            <p className={clientStyles.clientTestimonial}>"We recently worked with Tom to produce a video that educated users on Cyber threats. Tom was helpful and professional throughout and nothing was too much trouble. The video was of great quality and well received by users."</p>
            <p className={clientStyles.clientContact}>Stephan Donovan, Head of IT</p>
          </div>

          <div className={clientStyles.client3}>
            <FontAwesomeIcon icon={faDog} className={clientStyles.clientLogo} />
          </div>
          <div className={clientStyles.blurb1}>
            <p className={clientStyles.clientTestimonial}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium molestias fugiat eligendi doloremque reiciendis vero magni dolorem. Earum deleniti vitae inventore voluptatem cumque. Commodi quasi necessitatibus quod earum neque!"</p>
            <p className={clientStyles.clientContact}>Golley Slater contact, Job Title</p>
          </div>
        
      </div>

      <hr className={clientStyles.line}></hr>

      <div className={clientStyles.logoGrid}>
        {/* Use standard img tags due to gatsby-image/CSS grid conflict */}
        <div className={clientStyles.logoGridItem}>
          <img src={landrover_logo} alt="Land Rover" />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={yankeecandle_logo} alt="Yankee Candle" />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={uwe_logo} alt="UWE" />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={mitsubishi_logo} alt="Mitsubishi" className={clientStyles.logoLimit} />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={admiral_logo} alt="Admiral" className={clientStyles.logoLimit} />
        </div>
      </div>

    </div>
  </Layout>
)

export default ClientPage

// export const clientLogo = graphql`
//   fragment clientLogo on File {
//     childImageSharp {
//       fluid(maxWidth: 100) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

// export const query = graphql`
//   query {
//     admiral_logo: file(relativePath: { eq: "admiral_logo.png" }) {
//       ...clientLogo
//     }

//     landrover_logo: file(relativePath: { eq: "landrover_logo.png" }) {
//       ...clientLogo
//     }

//     mitsubishi_logo: file(relativePath: { eq: "mitsubishi_logo.png" }) {
//       ...clientLogo
//     }

//     uwe_logo: file(relativePath: { eq: "uwe_logo.png" }) {
//       ...clientLogo
//     }

//     yankeecandle_logo: file(relativePath: { eq: "yankeecandle_logo.png" }) {
//       ...clientLogo
//     }

//   }
// `