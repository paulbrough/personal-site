import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
  <Container>
    
    <Header></Header>
    {children}
    <Footer></Footer>
  
  </Container>
)