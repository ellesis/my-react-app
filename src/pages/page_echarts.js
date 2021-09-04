import React from 'react'
import Layout from '../components/layout'

import ChartLine from '../components/chart/chart_line'

import ChartBar from '../components/chart/chart_bar'
import ChartBarLabelRotation from '../components/chart/chart_bar-label-rotation'
import ChartStackedBar from '../components/chart/chart_stacked_bar'

import ChartFunnel from '../components/chart/chart_funnel'
import ChartLineArea from '../components/chart/chart_line_area'
import ChartPie from '../components/chart/chart_pie'
import ChartPieFunnel from '../components/chart/chart_pie_funnel'
import ChartPieTube from '../components/chart/chart_pie_tube2'

import ChartDynamicBar from '../components/chart/chart_dynamic_bar'
import ChartDynamicBar2 from '../components/chart/chart_dynamic_bar2'

import ChartGraph from '../components/chart/chart_graph'

function PageEcharts() {
  return (
    <Layout>
      <div className="row">
        <ChartLine title="Line Chart"></ChartLine>
        <ChartBar title="Bar Chart"></ChartBar>
      </div>

      <div className="row">
        <ChartStackedBar title="Stacked Bar Chart"></ChartStackedBar>
        <ChartBarLabelRotation title="Bar Label Rotation Chart"></ChartBarLabelRotation>
        <ChartLineArea title="Multi Line Chart"></ChartLineArea>

        <ChartPie title="Pie Chart"></ChartPie>
        <ChartPieTube title="Pie Chart Tube"></ChartPieTube>
        <ChartPieFunnel title="Pie Funnel Chart"></ChartPieFunnel>

        <ChartFunnel title="Funnel Chart"></ChartFunnel>
      </div>

      <div className="row">
        <ChartDynamicBar2 title="Dynamic Bar Chart - 2"></ChartDynamicBar2>

        <ChartDynamicBar title="Dynamic Bar Chart"></ChartDynamicBar>
        <ChartGraph title="Graph Chart"></ChartGraph>
      </div>
    </Layout>
  )
}

export default PageEcharts
