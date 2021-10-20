import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Lisa React App(mui-4, bootstrap5)
        </a>

        <div className="d-flex" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/dailysales">
                Daily Sales
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/transactions">
                Transactions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/items">
                Items
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bootstrap">
                Bootstrap5
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/echarts">
                eCharts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
