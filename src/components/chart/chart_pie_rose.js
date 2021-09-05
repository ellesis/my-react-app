import React from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartPieRose = (props) => {
  const { title } = props

  //Import json file. Used in {options}.
  const data = require('../../data/pie_funnel_data')

  //Array of names for legend in {options}
  const dataNames = data.map((i) => i.name)

  //Chart style
  const style = {
    height: '90vh',
    width: '100%',
  }

  //Chart options
  let option = {
    legend: {
      top: 'bottom',
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: [50, 250],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' },
        ],
      },
    ],
  }

  return (
    <div className="py-5 col-6 card mt-2 mb-2 rounded-3 shadow-sm">
      <h3>{title}</h3>
      <ReactEcharts option={option} style={style} />
    </div>
  )
}

export default ChartPieRose
