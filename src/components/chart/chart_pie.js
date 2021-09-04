import React, { useState } from 'react'
import ReactEcharts from 'echarts-for-react'

//<ChartPie title="Daily Sales Chart"></ChartPie>

const ChartPie = (props) => {
  const { title } = props

  const option = {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
        itemStyle: {
          emphasis: {
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
