import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"


const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default ({ children }) => (
  <header className={headerStyles.header}>
    
    <Link to="/" className={headerStyles.brand}>
      Paul Brough
    </Link>
    <ul className={headerStyles.nav}>
      <ListLink to="/portfolio/">Portfolio</ListLink>
      <ListLink to="/resume/">Resume</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  


  </header>
)