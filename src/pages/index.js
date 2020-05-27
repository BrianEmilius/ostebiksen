import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import EmployeeCard from "../components/employee-card"

function RootIndex(props) {
  let employees = props.data.allContentfulMedarbejder.nodes
  let today = new Date().toLocaleDateString("da")
  return (
    <Layout location={props.location}>
      <header>
        <h1>Velkommen til Center for Medie og Kommunikation</h1>
        <h1>{ today }</h1>
      </header>
      <div>
        <h1>Dagens Program</h1>
      </div>
      <div className="employees">
        {employees.map(employee => <EmployeeCard { ...employee } />)}
      </div>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulMedarbejder(sort: { fields: name, order: ASC }) {
      nodes {
        name,
        title,
        competences
        photo {
          fixed(width: 200) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
