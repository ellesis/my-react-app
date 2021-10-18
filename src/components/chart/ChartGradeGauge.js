import React from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartGradeGauge = ({ title }) => {
  const option = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 40,
            color: [
              [0.3, '#43C716'],
              [0.7, '#FFC712'],
              [1, '#CE3201']
            ]
          }
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-45%'],
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            width: 2
          }
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'auto',
            width: 5
          }
        },
        axisLabel: {
          color: '#464646',
          fontSize: 20,
          distance: -80,
          formatter: function (value) {
            if (value === 0.875) {
              return '  Heigh'
            } else if (value === 0.5) {
              return 'Medium'
            } else if (value === 0.125) {
              return 'Low'
            }
            return ''
          }
        },
        title: {
          offsetCenter: [0, '-20%'],
          fontSize: 30
        },
        detail: {
          fontSize: 40,
          offsetCenter: [0, '0%'],
          valueAnimation: true,
          formatter: function (value) {
            // return 'Risk' + Math.round(value * 100)
            return Math.round(value * 100)
          },
          color: 'auto'
        },
        data: [
          {
            name: 'Risk Value',
            value: 0.5
          }
        ]
      }
    ]
  }

  return (
    <div className="tracker-gauge">
      <ReactEcharts
        option={option}
        style={{
          width: '100%',
          height: '600px'
        }}
      />
    </div>
  )
}

export default ChartGradeGauge
