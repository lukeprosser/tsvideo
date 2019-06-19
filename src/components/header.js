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
      <input type="checkbox" id="nav-toggle" className="nav-toggle" className={headerStyles.navToggle} />
      <nav className={headerStyles.navbar}>
        <ul className={headerStyles.navList}>
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

  // <header className={headerStyles.header}>
  //   <h1><Link to="/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link></h1>
  //   <input type="checkbox" id="nav-toggle" className={headerStyles.navToggle} />
  //   <nav className={headerStyles.navbar}>
  //     <ul className={headerStyles.navList}>
  //       <li><Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
  //       <li><Link to="/#skills" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Skills</Link></li>
  //       <li><Link to="/#contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
  //     </ul>
  //   </nav>
  //   <label htmlFor="nav-toggle" className={headerStyles.navToggleLabel}>
  //     <span></span>
  //   </label>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
