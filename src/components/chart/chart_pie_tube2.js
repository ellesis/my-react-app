// https://medium.com/analytics-vidhya/data-visualization-with-react-echarts-1fa5c765e523

import React from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartPieTube2 = (props) => {
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
    series: [
      {
        name: 'Ticket Priority',
        type: 'pie',
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
        data: [
          { value: 1048, name: 'Low' },
          { value: 735, name: 'Medium' },
          { value: 580, name: 'High' },
          { value: 484, name: 'Urgent' },
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

export default ChartPieTube2
