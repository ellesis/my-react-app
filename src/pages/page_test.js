import React, { useState } from 'react'
import DashboardLayout from '../components_dashboard_layout/dashboard_layout' // Lisa dashboard

import ReactTooltip from 'react-tooltip'
// https://www.npmjs.com/package/react-tooltip
// https://wwayne.github.io/react-tooltip/

import Popup from '../components/popup/popup'

function PageFront() {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DashboardLayout title="Lisa React App">
      {/* children */}
      <h2>page_test</h2>
      {/* tooltip */}
      <div className="container">
        <div className="row">
          <h3 className="text-indigo">Tooltip</h3>
          <div className="col-3 text-indigo">
            click and show bottom tooltip&nbsp;
            <a data-tip="custom show - info" data-event="click focus">
              <i className="fas fa-question-circle "></i>
            </a>
            <ReactTooltip place="right" globalEventOff="click" />
          </div>

          <div className="col-3">
            Tooltip&nbsp;
            <a data-tip data-for="global" data-event="click focus">
              <i className="fas fa-question-circle text-primary"></i>
            </a>
            <ReactTooltip id="global" type="info" effect="solid" globalEventOff="click">
              <p>This is a global react component tooltip</p>
              <p>You can put every thing here</p>
              <ul>
                <li>Word</li>
                <li>Chart</li>
                <li>Else</li>
              </ul>
            </ReactTooltip>
            &nbsp;Tooltip2&nbsp;
            <a data-tip data-for="global2">
              <i className="fas fa-question-circle text-warning"></i>
            </a>
            <ReactTooltip id="global2" place="bottom" aria-haspopup="true">
              <p>This is a global react component tooltip</p>
              <p>You can put every thing here</p>
            </ReactTooltip>
          </div>
        </div>
      </div>

      {/* popup */}
      <div className="container">
        <div className="row">
          <h3>Popup</h3>
          <input type="button" value="Click to Open Popup" onClick={togglePopup} />
          {isOpen && (
            <Popup
              content={
                <>
                  <b>Design your Popup</b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <button>Test button</button>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      </div>

      {/* Bootstrap */}
      <div className="container">
        <div className="h3">Bootstrap5 - color</div>
        <div className="row">
          <div className="col-3 bg-primary">aaaaaa</div>
          <div className="col-3 bg-info bg-gradient">aaaaaa</div>
          <div className="col-3 bg-dark bg-gradient text-white">aaaaaa</div>
        </div>

        {/* https://getbootstrap.com/docs/5.0/components/spinners/ */}
        <div className="h3">Bootstrap5 - loading button</div>
        <button className="btn btn-primary">
          <span className="spinner-border spinner-border-sm"></span>
          Loading..
        </button>

        <button className="btn btn-primary" disabled>
          <span className="spinner-grow spinner-grow-sm"></span>
          Loading..
        </button>
        <div className="row">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default PageFront
