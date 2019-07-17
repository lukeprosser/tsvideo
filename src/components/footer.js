import React from "react"

import footerStyles from '../styles/footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <footer>
    <div className={footerStyles.container}>
      <div className={footerStyles.social}>
        <a href="https://www.linkedin.com/in/tom-smith-608657151/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin-in"]} className={footerStyles.socialLink} /></a>
        {/* <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "youtube"]} className={footerStyles.socialLink} /></a>
        <a href="https://www.vimeo.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "vimeo-v"]} className={footerStyles.socialLink} /></a> */}
      </div>
      <div className={footerStyles.credit}>
        <p>Tom Smith{` `}© {new Date().getFullYear()}</p>
        <p>Developed by <a href="https://www.createdeluxe.com" target="_blank" rel="noopener noreferrer">CreateDeluxe</a></p>
      </div>
    </div>
  </footer>
)

export default Footer