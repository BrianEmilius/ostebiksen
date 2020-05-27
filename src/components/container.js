import React from "react"
import "./base.css"

export default ({ children }) => (
  <div className="wrapper" style={{ maxWidth: 1920, margin: '0 auto' }}>{children}</div>
)
