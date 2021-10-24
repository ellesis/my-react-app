import React from 'react'
import ReactEcharts from 'echarts-for-react'

import * as echarts from 'echarts/core'

// change theme
echarts.registerTheme('my_theme2', {
  backgroundColor: '#20c997'
})

const ChartBar = ({ title }) => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  }

  return (
    <div className="py-5 col-6 card mt-2 mb-2 rounded-3 shadow-sm">
      <h3>{title}</h3>
      <ReactEcharts option={option} theme="my_theme2" />
    </div>
  )
}

export default ChartBar
