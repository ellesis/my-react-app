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

      {/* bootstrap icon */}
      <div className="container">
        <div className="h2">bootstrap icon</div>
        <div className="row ">
          <div className="text-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-question-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
          </svg>
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
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default PageFront
