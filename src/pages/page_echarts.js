import React from 'react'
import Layout from '../components/layout'

import ChartLine from '../components/chart/chart_line'
import ChartBar from '../components/chart/chart_bar'
import ChartFunnel from '../components/chart/chart_funnel'
import ChartBarLabelRotation from '../components/chart/chart_bar-label-rotation'
import ChartDynamicBar from '../components/chart/chart_dynamic_bar'
import ChartLineMulti from '../components/chart/chart_line_multi'

function PageEcharts() {
  return (
    <Layout>
      <div className="row">
        <ChartBar title="Bar Chart"></ChartBar>
        <ChartLine title="Line Chart"></ChartLine>
      </div>

      <div className="row">
        <ChartFunnel title="Daily Sales Chart"></ChartFunnel>
        <ChartBarLabelRotation title="Daily Sales Chart"></ChartBarLabelRotation>
        <ChartDynamicBar title="Daily Sales Chart"></ChartDynamicBar>
        <ChartLineMulti title="Daily Sales Chart"></ChartLineMulti>
      </div>
    </Layout>
  )
}

export default PageEcharts
