import React from 'react'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Deposits from '../components-mui/Deposits'
import Orders from '../components-mui/Orders'

import DashboardLayout from '../components_dashboard_layout/dashboard_layout'
import RiskValueAwesome from '../components/card/RiskValueAwesome'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  }
}))

function PageFront() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <DashboardLayout title="Lisa React App">
      {/* children */}
      <Grid container spacing={3}>
        <div className="container p-2">
          <div className="row">
            <div className="col-6">
              <RiskValueAwesome></RiskValueAwesome>
              {/* <RiskValue></RiskValue> */}
            </div>
          </div>
        </div>

        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}

export default PageFront
