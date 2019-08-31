/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { BrowserRouter as Router } from "react-router-dom"

import Header from "../header/header"
import Footer from "../footer/footer"
import Routes from "../../pages/routes"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Router>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <Routes />
        </div>
      </Router>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
