import React, { useState } from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartPie = ({ title }) => {
  const option = {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }
  const [count, setCount] = useState(0)
  function onChartReady(echarts) {
    console.log('echarts is ready', echarts)
  }
  function onChartClick(param, echarts) {
    console.log(param, echarts)
    setCount(count + 1)
  }
  function onChartLegendselectchanged(param, echarts) {
    console.log(param, echarts)
  }

  return (
    <div className="py-5 col-6 card mt-2 mb-2 rounded-3 shadow-sm">
      <h3>{title}</h3>
      <ReactEcharts
        option={option}
        style={{ height: 400 }}
        onChartReady={onChartReady}
        onEvents={{
          click: onChartClick,
          legendselectchanged: onChartLegendselectchanged,
        }}
      />
      <div>Click Count: {count}</div>
      <div>Open console, see the log detail.</div>
    </div>
  )
}

export default ChartPie
