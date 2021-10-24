import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// https://vasconez.dev/posts/1
// https://vasconez.dev/posts/2
// https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API
// import echarts from 'echarts'
import * as echarts from 'echarts/core'

function Chart({ options }) {
  const myChart = useRef(null)
  useEffect(() => {
    const chart = echarts.init(myChart.current)
    chart.setOption(options)
  }, [options])

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

Chart.propTypes = {
  options: PropTypes.any
}

export default Chart
