import React from 'react'
import DashboardLayout from '../components_dashboard_layout/dashboard_layout'

//e-Charts components
import ChartGradeGauge from '../components/chart/ChartGradeGauge'
import ChartCandlestickIndex from '../components/chart/ChartCandlestickIndex'

import ChartLine from '../components/chart/chart_line'

import ChartBar from '../components/chart/chart_bar'
import ChartBarWithTooltipInfo from '../components/chart/chart_bar_tooltip_info'

import ChartBarLabelRotation from '../components/chart/chart_bar-label-rotation'
import ChartStackedBar from '../components/chart/chart_stacked_bar'

import ChartFunnel from '../components/chart/chart_funnel'
import ChartLineArea from '../components/chart/chart_line_area'
import ChartPie from '../components/chart/chart_pie'
import ChartPieRose from '../components/chart/chart_pie_rose'

import ChartPieDynamicRose from '../components/chart/chart_pie_dynamic_rose'
import ChartPieTube from '../components/chart/chart_pie_tube'
import ChartPieTubeRound from '../components/chart/chart_pie_tube_round'

import ChartDynamicBar from '../components/chart/chart_dynamic_bar'
import ChartDynamicBarPopulation from '../components/chart/chart_dynamic_bar_population'

import ChartGraph from '../components/chart/chart_graph'

function PageEcharts() {
  return (
    <DashboardLayout title="Lisa React App > eCharts">
      <div className="row p-4" style={{ height: '500px' }}>
        <div className="col-12">
          <ChartCandlestickIndex title="Shanghai Index"></ChartCandlestickIndex>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12"> Moving Average (MA)</div>
      </div>

      <div className="row">
        <div className="col-6" style={{ width: '500px' }}>
          <h3>Grade Gauge </h3>
          <ChartGradeGauge title="ChartGradeGauge"></ChartGradeGauge>
        </div>
      </div>

      <div className="row">
        <ChartLine title="ChartLine"></ChartLine>
        <ChartLineArea title="ChartLineArea - Multi Line Chart"></ChartLineArea>
      </div>
      <div className="row">
        <ChartBar title="Bar Chart"></ChartBar>
        <ChartBarWithTooltipInfo title="Line Chart"></ChartBarWithTooltipInfo>
        <ChartStackedBar title="Stacked Bar Chart"></ChartStackedBar>
        <ChartBarLabelRotation title="Bar Label Rotation Chart"></ChartBarLabelRotation>
      </div>
      <div className="row">
        <ChartPie title="Pie Chart"></ChartPie>
        <ChartPieRose title="Pie Funnel Chart"></ChartPieRose>

        <ChartPieDynamicRose title="Pie Chart"></ChartPieDynamicRose>
        <ChartPieTube title="Pie Chart Tube"></ChartPieTube>
        <ChartPieTubeRound title="Pie Chart Tube Round"></ChartPieTubeRound>
      </div>
      <div className="row">
        <ChartFunnel title="Funnel Chart"></ChartFunnel>
      </div>
      <div className="row">
        <ChartDynamicBarPopulation title="Dynamic Bar Chart Population"></ChartDynamicBarPopulation>

        <ChartDynamicBar title="Dynamic Bar Chart"></ChartDynamicBar>
        <ChartGraph title="Graph Chart"></ChartGraph>
      </div>
    </DashboardLayout>
  )
}

export default PageEcharts
