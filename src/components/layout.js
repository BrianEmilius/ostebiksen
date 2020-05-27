import React from "react"
import Container from "./container"

function Template({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Template
