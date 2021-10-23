import React from 'react'

function Valuation(props) {
  console.log('>>> : Valuation -> props', props)
  const comparison = Math.round((props.last_price - props.valuation) * 100) / 100
  const percentage = Math.round((props.last_price / props.valuation) * 10000) / 100

  const colors = ['#006b00', '#009b00', '#00bd00', '#ff8400', '#f60000', '#707070']
  const degs = [0, 45, 90, 135, 180, 270]
  const texts = ['Great Deal', 'Good Deal', 'Fair Deal', 'Bad Deal', 'Overpriced', 'No Price/Uncertain']

  let idx = 0

  if (percentage < 85) idx = 0
  else if (percentage < 95) idx = 1
  else if (percentage < 105) idx = 2
  else if (percentage < 115) idx = 3
  else idx = 4

  const text_color = colors[idx]
  const deg = degs[idx]
  const text = texts[idx]
  const text2 = props.last_price > props.valuation ? 'ABOVE' : 'BELOW'

  return (
    <div className="card mb-4 box-shadow">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Valuation</h4>
      </div>
      <div className="card-body text-center fs-6">
        <b className="fs-6">
          <div className="fa-lg text-center fw-bold lh-base" style={{ color: text_color }}>
            <i className="fas fa-arrow-alt-circle-up" style={{ transform: `rotate(${deg}deg)` }}></i>
            &nbsp; {text} <br />${comparison} {text2}
            <br />
          </div>
        </b>
        FalconUp's value: ${props.valuation} <br />
        Last Price: ${props.last_price}
      </div>
    </div>
  )
}

export default Valuation
