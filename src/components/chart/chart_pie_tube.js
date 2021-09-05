// https://medium.com/analytics-vidhya/data-visualization-with-react-echarts-1fa5c765e523

import React from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartPieTube = ({ title }) => {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'],
    },
    series: [
      {
        name: 'Utilization',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: 'Mon' },
          { value: 310, name: 'Tues' },
          { value: 234, name: 'Wed' },
          { value: 135, name: 'Thurs' },
          { value: 1548, name: 'Fri' },
        ],
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

export default ChartPieTube
