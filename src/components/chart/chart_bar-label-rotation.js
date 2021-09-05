// https://codesandbox.io/s/echart-theme-7t3oy?file=/src/App.js

import React from 'react'
import ReactEcharts from 'echarts-for-react'

//<ChartBarLabelRotation title="Daily Sales Chart"></ChartBarLabelRotation>
const ChartBarLabelRotation = ({ title }) => {
  var app = {}

  var posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight',
  ]

  app.configParameters = {
    rotate: {
      min: -90,
      max: 90,
    },
    align: {
      options: {
        left: 'left',
        center: 'center',
        right: 'right',
      },
    },
    verticalAlign: {
      options: {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom',
      },
    },
    position: {
      options: posList.reduce(function (map, pos) {
        map[pos] = pos
        return map
      }, {}),
    },
    distance: {
      min: 0,
      max: 100,
    },
  }

  app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
  }

  var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {},
    },
  }

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['2012', '2013', '2014', '2015', '2016'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390],
      },
      {
        name: 'Steppe',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290],
      },
      {
        name: 'Desert',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190],
      },
      {
        name: 'Wetland',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [98, 77, 101, 99, 40],
      },
    ],
  }

  return (
    <div className="py-5 col-6 card mt-2 mb-2 rounded-3 shadow-sm">
      <h3>{title}</h3>
      <ReactEcharts option={option} />
    </div>
  )
}

export default ChartBarLabelRotation
