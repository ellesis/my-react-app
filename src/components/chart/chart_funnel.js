import React, { useRef } from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartFunnel = (props) => {
  const { title } = props

  const option = {
    title: {
      text: '漏斗图',
      subtext: '纯属虚构',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%',
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    legend: {
      data: ['展现', '点击', '访问', '咨询', '订单'],
    },
    series: [
      {
        name: '预期',
        type: 'funnel',
        left: '10%',
        width: '80%',
        label: {
          normal: {
            formatter: '{b}预期',
          },
          emphasis: {
            position: 'inside',
            formatter: '{b}预期: {c}%',
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            opacity: 0.7,
          },
        },
        data: [
          { value: 60, name: '访问' },
          { value: 40, name: '咨询' },
          { value: 20, name: '订单' },
          { value: 80, name: '点击' },
          { value: 100, name: '展现' },
        ],
      },
      {
        name: '实际',
        type: 'funnel',
        left: '10%',
        width: '80%',
        maxSize: '80%',
        label: {
          normal: {
            position: 'inside',
            formatter: '{c}%',
            textStyle: {
              color: '#fff',
            },
          },
          emphasis: {
            position: 'inside',
            formatter: '{b}实际: {c}%',
          },
        },
        itemStyle: {
          normal: {
            opacity: 0.5,
            borderColor: '#fff',
            borderWidth: 2,
          },
        },
        data: [
          { value: 30, name: '访问' },
          { value: 10, name: '咨询' },
          { value: 5, name: '订单' },
          { value: 50, name: '点击' },
          { value: 80, name: '展现' },
        ],
      },
    ],
  }

  const instance = useRef(null)

  function clickBtn() {
    const base64 = instance.current.getEchartsInstance().getDataURL()
    const img = new Image()
    img.src = base64
    const newWin = window.open('', '_blank')
    newWin.document.write(img.outerHTML)
  }

  return (
    <div className="py-5 col-6 card mt-2 mb-2 rounded-3 shadow-sm">
      <h3>{title}</h3>
      <ReactEcharts ref={instance} option={option} style={{ height: 400 }} />
      <div>
        <button onClick={clickBtn}>click here to get the DataURL of chart.</button>
      </div>
    </div>
  )
}

export default ChartFunnel
