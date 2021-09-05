// https://codesandbox.io/s/xenodochial-leftpad-z3q5f?file=/src/singlebarchart.js:24-937

import React from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartBarWithTooltipInfo = (props) => {
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
      data: ['Low', 'Medium', 'High', 'Urgent'],
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: '40%',
      bottom: 20,
    },
    xAxis: {
      type: 'category',
      data: ['Low', 'Medium', 'High', 'Urgent'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Ticket Priority',
        type: 'bar',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
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
        data: [120, 200, 150, 80, 70, 110],
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

export default ChartBarWithTooltipInfo
