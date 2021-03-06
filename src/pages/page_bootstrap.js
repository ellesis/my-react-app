import React, { useState, useEffect, useRef } from 'react'
// https://www.codeply.com/p/IdzoX6osI2 예제로부터 가져옴
import { Popover, Toast, Tooltip, Alert, Dropdown } from 'bootstrap'
// const { useState, useEffect, useRef } = React
// const { Collapse, Popover, Toast, Tooltip, Alert, Modal, Dropdown } = bootstrap

// import DashboardLayout from '../components_dashboard_layout/dashboard_layout'
import Layout from '../components/layout'

import Grid from '@material-ui/core/Grid'

function CollapseDemo() {
  return (
    <div className="py-2">
      <button className="btn btn-primary" data-bs-target="#collapseTarget" data-bs-toggle="collapse">
        Toggle collapse
      </button>
      <div className="collapse" id="collapseTarget">
        This is the toggle-able content!
      </div>
    </div>
  )
}

function PopoverDemo() {
  const popoverRef = useRef()

  useEffect(() => {
    var popover = new Popover(popoverRef.current, {
      content: 'Hello popover content!',
      title: 'My Popover',
      trigger: 'hover'
    })
    console.info('#: PopoverDemo -> popover', popover)
  })

  return (
    <div className="py-2">
      <button className="btn btn-danger" ref={popoverRef}>
        Hover for popover
      </button>
    </div>
  )
}

function ToastDemo() {
  var [toast, setToast] = useState(false)
  const toastRef = useRef()

  useEffect(() => {
    var myToast = toastRef.current
    var bsToast = Toast.getInstance(myToast)

    if (!bsToast) {
      // initialize Toast
      bsToast = new Toast(myToast, { autohide: false })
      // hide after init
      bsToast.hide()
      setToast(false)
    } else {
      // toggle
      toast ? bsToast.show() : bsToast.hide()
    }
  }, [toast])

  return (
    <div className="py-2">
      <button className="btn btn-success" onClick={() => setToast((toast) => !toast)}>
        Toast {toast ? 'hide' : 'show'}
      </button>
      <div className="toast position-absolute top-0 end-0 m-4" role="alert" ref={toastRef}>
        <div className="toast-header">
          <strong className="me-auto">Bootstrap 5</strong>
          <small>4 mins ago</small>
          <button type="button" className="btn-close" onClick={() => setToast(false)} aria-label="Close"></button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  )
}

function TooltipDemo() {
  const tooltipRef = useRef()

  useEffect(() => {
    var tooltip = new Tooltip(tooltipRef.current, {
      title: 'This is the tooltip content!',
      placement: 'right',
      trigger: 'hover'
    })
    console.info('#: TooltipDemo -> tooltip', tooltip)
  })

  return (
    <div className="py-2">
      <button className="btn btn-info" ref={tooltipRef}>
        Hover for tooltip
      </button>
    </div>
  )
}

function AlertDemo() {
  var [message, setMessage] = useState('...')
  const alertRef = useRef()

  const showAlert = () => {
    // 맨처음 한번만 보여짐
    console.log('>>>: showAlert -> showAlert')
    setMessage('Holy guacamole! This is my alert')
    const alertEle = alertRef.current
    const bsAlert = new Alert(alertEle)
    alertEle.classList.add('show')

    // hide alert after 5 seconds
    setTimeout(() => {
      bsAlert.close()
    }, 5000)
  }

  return (
    <div className="py-2">
      <button className="btn btn-warning" onClick={showAlert}>
        Trigger alert
      </button>
      <div className="position-absolute top-0 end-0 m-4">
        <div className="alert alert-warning alert-dismissible fade" ref={alertRef} role="alert">
          {message}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>
  )
}

function ModalDemo() {
  // using data-bs attributes only here...
  return (
    <div className="py-2">
      <button className="btn btn-dark" data-bs-target="#myModal" data-bs-toggle="modal">
        Show modal
      </button>
      <div className="modal" tabIndex="-1" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DropdownDemo = () => {
  console.log('>>>: DropdownDemo -> DropdownDemo')
  const ddRef = useRef()

  useEffect(() => {
    var dd = new Dropdown(ddRef.current, {})
    console.info('#: DropdownDemo -> dd', dd)
  })

  return (
    <div className="py-2">
      <div className="dropdown">
        <button className="btn btn-secondary" type="button" ref={ddRef} aria-expanded="false" data-bs-toggle="dropdown">
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdown1">
          <li>
            <a className="dropdown-item" href="#/">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#/">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#/">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

function PageBootstrap() {
  const [mounted, setMounted] = useState(true)

  return (
    <Layout>
      <Grid item xs={12}>
        <div className="container py-4">
          <h3>Bootstrap 5 React Examples</h3>
          <h6>no jquery, no reactstrap, no react-bootstrap</h6>
          {mounted && (
            <div>
              <PopoverDemo />
              <CollapseDemo />
              <ToastDemo />
              <TooltipDemo />
              <AlertDemo />
              <ModalDemo />
              <DropdownDemo />
            </div>
          )}
        </div>
      </Grid>
    </Layout>
  )
}

export default PageBootstrap
