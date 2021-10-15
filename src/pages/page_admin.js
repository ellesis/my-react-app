import React from 'react'

import DashboardLayout from '../components_dashboard_layout/dashboard_layout'
import Content from '../components/content'

import ChartLine from '../components/chart/chart_line'
import ChartBar from '../components/chart/chart_bar'

function DashboardAdmin() {
  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="row">
        <Content title="Sales by Category"></Content>
        <ChartBar title="Sales by Category Chart"></ChartBar>
      </div>

      <div className="row">
        <Content title="Daily Sales"></Content>
        <ChartLine title="Daily Sales Chart"></ChartLine>
      </div>

      <div className="row">
        <Content title="Transactions"></Content>
        <Content title="Item List"></Content>
      </div>
    </DashboardLayout>
  )
}

export default DashboardAdmin
