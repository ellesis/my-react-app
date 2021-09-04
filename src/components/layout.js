import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

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
