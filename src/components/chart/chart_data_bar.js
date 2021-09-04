// https://codesandbox.io/s/xenodochial-leftpad-z3q5f?file=/src/singlebarchart.js:24-937

import React from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartDataBar = (props) => {
  const { title } = props

  const option = {
    tooltip: {
      trigger: 'item',
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    legend: {
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: '40%',
      bottom: 20,
    },
    calculable: true,
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Incident created by day of week',
        type: 'bar',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [120, 200, 150, 80, 70, 110, 130],
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

export default ChartDataBar
