import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'

import ChartBar from '../components/chart/chart_bar'
import RiskValueAwesome from '../components/card/RiskValueAwesome'

function PageFront() {
  return (
    <Layout>
      <div className="container p-2">
        <div className="row">
          <div className="col-6">
            <RiskValueAwesome></RiskValueAwesome>
            {/* <RiskValue></RiskValue> */}
          </div>
        </div>
      </div>
      <div className="row">
        <Content title="Sales by Category"></Content>
        <ChartBar title="Sales by Category Chart"></ChartBar>
      </div>
    </Layout>
  )
}

export default PageFront
