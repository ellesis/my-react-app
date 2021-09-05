import React from 'react'
import Layout from '../components/layout'

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
    <Layout>
      <div className="row">
        <ChartLine title="Line Chart"></ChartLine>
        <ChartLineArea title="Multi Line Chart"></ChartLineArea>
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
    </Layout>
  )
}

export default PageEcharts
