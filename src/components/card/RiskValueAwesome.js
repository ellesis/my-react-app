import React from 'react'

/**
 * Font Awesome RiskValue Card
 * https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons
 */
export default function RiskValueAwesome() {
  return (
    <>
      {/* arrow color and risk value */}
      <div className="p-3 border border-2 m-2">
        <div className="fa-lg text-center fw-bold lh-base" style={{ color: '#006b00' }}>
          <i className="fas fa-arrow-alt-circle-up"></i>
          &nbsp; Great Deal <br />
          $10 Below <br />
        </div>
        <div className="text-center fw-bold">FalconUp's Instant Market Value of $130</div>
      </div>

      <div className="p-3 border border-2 m-2">
        <div className="fa-lg text-center fw-bold lh-base" style={{ color: '#ff8400' }}>
          <i className="fas fa-arrow-alt-circle-up" style={{ transform: 'rotate(135deg)' }}></i>
          &nbsp; High Price <br />
          $10 Above <br />
        </div>
        <div className="text-center fw-bold">FalconUp's Instant Market Value of $130</div>
      </div>

      <div className="p-3">
        <div className="fa-lg" style={{ color: '#009b00' }}>
          <i className="fas fa-arrow-alt-circle-up" style={{ transform: 'rotate(45deg)' }}></i>
          &nbsp; Good Deal
        </div>
        <div className="fa-lg" style={{ color: '#00bd00' }}>
          <i className="fas fa-arrow-alt-circle-up fa-rotate-90"></i>
          &nbsp; Fair Deal
        </div>
        <div className="fa-lg" style={{ color: '#ff8400' }}>
          <i className="fas fa-arrow-alt-circle-up" style={{ transform: 'rotate(135deg)' }}></i>
          &nbsp; High Price
        </div>
        <div className="fa-lg" style={{ color: '#f60000' }}>
          <i className="fas fa-arrow-alt-circle-up fa-rotate-180"></i>
          &nbsp; Overpriced
        </div>
        <div className="fa-lg">
          <i className="fas fa-times-circle" style={{ color: '#707070' }}></i>
          &nbsp; No Price Analysis
        </div>
        <div className="fa-lg">
          <i className="fas fa-exclamation-circle" style={{ color: '#707070' }}></i>
          &nbsp; No Price Analysis
        </div>
        <div className="fa-lg">
          <i className="fas fa-question-circle" style={{ color: '#707070' }}></i>
          &nbsp; Uncertain
        </div>
        <div> Price: $100 </div>
        Great Deal / Good Deal / Fair Deal / High Price / Uncertain / No Price Analysis $ 200 Below FalconUp's Instant
        Market Value of $130
      </div>

      <div className="p-3">
        {/* arrow color and risk value */}
        <div className="fa-lg align-middle" style={{ color: '#006b00' }}>
          <i className="fas fa-arrow-alt-circle-up"></i>
          &nbsp; Great Deal
        </div>
        <div className="fa-lg">
          <i className="fas fa-arrow-alt-circle-up" style={{ transform: 'rotate(45deg)', color: '#009b00' }}></i>
          &nbsp; Good Deal
        </div>
        <div className="fa-lg">
          <i className="fas fa-arrow-alt-circle-up fa-rotate-90" style={{ color: '#00bd00' }}></i>
          &nbsp; Fair Deal
        </div>
        <div className="fa-lg">
          <i className="fas fa-arrow-alt-circle-up" style={{ transform: 'rotate(135deg)', color: '#ff8400' }}></i>
          &nbsp; High Price
        </div>
        <div className="fa-lg">
          <i className="fas fa-arrow-alt-circle-up fa-rotate-180" style={{ color: '#f60000' }}></i>
          &nbsp; Overpriced
        </div>
        <div> Price: $100 </div>
        Great Deal / Good Deal / Fair Deal / High Price / Uncertain / No Price Analysis $ 200 Below FalconUp's Instant
        Market Value of $130
      </div>
    </>
  )
}
