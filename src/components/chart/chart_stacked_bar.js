// https://codesandbox.io/s/xenodochial-leftpad-z3q5f?file=/src/singlebarchart.js:24-937

import React from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartStackedBar = (props) => {
  const { title } = props

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [320, 302, 301, 334, 390, 330, 320],
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [150, 212, 201, 154, 190, 330, 410],
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320],
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

export default ChartStackedBar
