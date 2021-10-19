import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'

import ChartLine from '../components/chart/chart_line'
import ChartBar from '../components/chart/chart_bar'
import RiskValueAwesome from '../components/card/RiskValueAwesome'
import RiskValue from '../components/card/RiskValue'

function PageFront() {
  return (
    <Layout>
      <div className="row">
        <RiskValueAwesome></RiskValueAwesome>
        {/* <RiskValue></RiskValue> */}
      </div>

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
    </Layout>
  )
}

export default PageFront
