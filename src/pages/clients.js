import React from "react"

import admiral_logo from "../images/admiral_logo.png"
import siml_logo from "../images/siml_logo.jpg"
import golleyslater_logo from "../images/golleyslater_logo.jpg"

import axa_logo from "../images/axa_logo.png"
import mitsubishi_logo from "../images/mitsubishi_logo.png"
import barclays_logo from "../images/barclays_logo.png"
import landrover_logo from "../images/landrover_logo.png"
import lexus_logo from "../images/lexus_logo.png"
import national_trust_logo from "../images/national_trust_logo.png"
import uwe_logo from "../images/uwe_logo.png"
import confused_logo from "../images/confused_logo.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

import clientStyles from "../styles/clients.module.scss"

const ClientPage = (props) => (
  <Layout>
    <SEO title="Clients" />
    <div className={clientStyles.container}>
      <div className={clientStyles.testimonials}>

          <div className={clientStyles.client1}>
            <img src={admiral_logo} alt="Admiral" className={clientStyles.clientLogo} />
          </div>
          <div className={clientStyles.blurb1}>
            <p className={clientStyles.clientTestimonial}>"We recently worked with Tom to produce a video that educated users on Cyber threats. Tom was helpful and professional throughout and nothing was too much trouble. The video was of great quality and well received by users."</p>
            <p className={clientStyles.clientContact}>Stephan Donovan - Head of IT Security Culture, Admiral</p>
          </div>
          
          <div className={clientStyles.client2}>
            <img src={siml_logo} alt="SIML" className={clientStyles.clientLogo} />
          </div>
          <div className={clientStyles.blurb1}>
            <p className={clientStyles.clientTestimonial}>"Working with Tom continues to be a joy. His skills as a bold filmmaker and quickfire editor are hugely valuable to our clients, while his devotion to each and every project is unsurpassed. Tom is a craftsman with a wonderfully easy-going nature - making the many projects we’ve undertaken together a breeze to deliver."</p>
            <p className={clientStyles.clientContact}>Owen Williams - Managing Director, Siml</p>
          </div>
          
          <div className={clientStyles.client3}>
            <img src={golleyslater_logo} alt="Golley Slater" className={clientStyles.clientLogo} />
          </div>
          <div className={clientStyles.blurb1}>
            <p className={clientStyles.clientTestimonial}>"Tom is a sheer delight to work with. Talented, totally reliable and a joy to work alongside and introduce to clients, colleagues and fellow collaborators. We've worked with Tom on many campaigns and he always works his magic, even with the scantest of briefs and shortest of deadlines. He delivers excellent work on deadline, brief and budget - and always with a smile. Unflappable and a great chap to have around, we genuinely love working with Tom."</p>
            <p className={clientStyles.clientContact}>Annabel Lloyd - Director, Golley Slater</p>
          </div>
        
      </div>

      <hr className={clientStyles.line}></hr>

      <div className={clientStyles.logoGrid}>
        {/* Use standard img tags due to gatsby-image/CSS grid conflict */}
        {/* logoLimitSm, logoLimitMd, logoLimitLg apply varying max width to logo sizes for consistency */}
        <div className={clientStyles.logoGridItem}>
          <img src={axa_logo} alt="AXA" className={clientStyles.logoLimitMd} />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={admiral_logo} alt="Admiral" className={clientStyles.logoLimitSm} />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={mitsubishi_logo} alt="Mitsubishi" className={clientStyles.logoLimitSm} />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={barclays_logo} alt="Barclays" />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={landrover_logo} alt="Land Rover" />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={lexus_logo} alt="Lexus" />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={national_trust_logo} alt="National Trust" className={clientStyles.logoLimitLg} />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={uwe_logo} alt="UWE" />
        </div>
        <div className={clientStyles.logoGridItem}>
          <img src={confused_logo} alt="Confused" />
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