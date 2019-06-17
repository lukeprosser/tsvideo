import React from "react"

import footerStyles from '../styles/footer.module.scss'

const Footer = () => (
  <footer>
    <a href="https://www.createdeluxe.com" target="_blank" rel="noopener noreferrer">CreateDeluxe</a>{` `}© {new Date().getFullYear()}
  </footer>
)

export default Footer