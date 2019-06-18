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
      <input type="checkbox" id="nav-toggle" className={headerStyles.navToggle} />
      <nav className={headerStyles.navbar}>
        <ul>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/">Work</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/about">About</Link></li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/clients">Clients</Link></li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className={headerStyles.navToggleLabel}>
        <span></span>
      </label>
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
