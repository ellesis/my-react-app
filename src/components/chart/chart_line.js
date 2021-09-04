import React from 'react'
import ReactEcharts from 'echarts-for-react'

// <ChartLine title="Daily Sales Chart"></ChartLine>

const ChartLine = (props) => {
  const { title } = props

  const option1 = {
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  }

  return (
    <div className="py-5 col-6 card mt-2 mb-2 rounded-3 shadow-sm">
      <h3>{title}</h3>
      <ReactEcharts option={option1} />
    </div>
  )
}

export default ChartLine
