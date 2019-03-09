import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default ({ children }) => (
    <header className={headerStyles.header}>
      <Link to="/">
        <h3>MySweetSite</h3>
      </Link>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
        
    </header>
)