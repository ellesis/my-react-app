import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
