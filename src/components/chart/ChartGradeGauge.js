import React from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartGradeGauge = ({ title }) => {
  const option = {
    series: [
      {
        type: 'gauge',
        // gauge angle 설정 & value
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 40,
            //gauge color 설정
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
              return '  High'
            } else if (value === 0.5) {
              return 'Medium'
            } else if (value === 0.125) {
              return 'Low'
            }
            return ''
          }
        },
        // Risk Value 출력하는 것 위치 설정 가능
        title: {
          offsetCenter: [0, '-8%'],
          fontSize: 30
        },
        // Value 출력하는 위치 & format 설정
        detail: {
          fontSize: 30,
          offsetCenter: [0, '15%'], // value 출력하는 위치
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

  // 여기서 gauge의 하단 hidden되는 위치를 설정해 주어야 한다.
  return (
    <div
      style={{
        overflow: 'hidden',
        height: '400px'
      }}
    >
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
