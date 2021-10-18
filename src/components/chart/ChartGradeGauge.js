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
        splitNumber: 10,
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
        /*
        // 삼각형 모양 pointer
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-45%'],
          itemStyle: {
            color: 'auto'
          }
        },
        */
        pointer: {
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          length: '58%',
          width: 16,
          offsetCenter: [0, '5%']
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
        //value값이 출력되는 걸 확인해서 출력되는 위치를 정해주어야 한다
        axisLabel: {
          color: '#464646',
          fontSize: 20,
          distance: -70,
          formatter: function (value) {
            console.log('>>>: ChartGradeGauge -> value', value)
            if (value === 0.9) {
              return '  High'
            } else if (value === 0.5) {
              return 'Medium'
            } else if (value === 0.1) {
              return 'Low'
            }
            return ''
          }
        },
        // Risk Value 출력하는 것 위치 설정 가능
        title: {
          offsetCenter: [0, '15%'],
          fontSize: 30
        },
        // Value 출력하는 위치 & format 설정
        detail: {
          fontSize: 30,
          offsetCenter: [0, '30%'], // value 출력하는 위치
          valueAnimation: true,
          formatter: function (value) {
            // return 'Risk' + Math.round(value * 100)
            return Math.round(value * 100)
          },
          color: 'auto'
        },
        // out line box and value
        /*
        detail: {
          backgroundColor: '#fff',
          borderColor: '#999',
          borderWidth: 2,
          width: '60%',
          lineHeight: 40,
          height: 40,
          borderRadius: 8,
          offsetCenter: [0, '35%'],
          valueAnimation: true,
          formatter: function (value) {
            return '{value|' + value.toFixed(0) + '}{unit|km/h}'
          },
          rich: {
            value: {
              fontSize: 50,
              fontWeight: 'bolder',
              color: '#777'
            },
            unit: {
              fontSize: 20,
              color: '#999',
              padding: [0, 0, -20, 10]
            }
          }
        },
        */
        data: [
          {
            name: 'Risk Value',
            value: 0.8
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
        height: '350px'
      }}
    >
      <ReactEcharts
        option={option}
        style={{
          width: '100%',
          height: '500px'
        }}
      />
    </div>
  )
}

export default ChartGradeGauge
