import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from '../styles/header.module.scss'

const Header = ({ siteTitle }) => (
  <header>
    <div className={headerStyles.container}>
      <h1 className={headerStyles.brand}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav>
        <Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/">Work</Link>
        <Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/about">About</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
