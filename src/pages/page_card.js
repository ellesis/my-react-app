import React from 'react'

import Grid from '@material-ui/core/Grid'

import DashboardLayout from '../components_dashboard_layout/dashboard_layout'
import RiskValueAwesome from '../components/card/RiskValueAwesome'

function PageCard() {
  return (
    <DashboardLayout title="Lisa React App >> Card">
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
      </Grid>
    </DashboardLayout>
  )
}

export default PageCard
