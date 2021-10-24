import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// https://vasconez.dev/posts/1
// import echarts from 'echarts'
import * as echarts from 'echarts/core'

function ChartNew() {
  const myChart = useRef(null)

  const options = {
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
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
        }
      }
    ]
  }

  useEffect(() => {
    const chart = echarts.init(myChart.current)
    chart.setOption(options)
  })

  return (
    <div
      ref={myChart}
      style={{
        width: '100%',
        height: '100%'
      }}
    ></div>
  )
}

ChartNew.propTypes = {
  options: PropTypes.any
}

export default ChartNew
