import React from 'react'

/**
 * Font Awesome
 * https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons
 */
export default function RiskValueAwesome() {
  return (
    <>
      {/* arrow color and risk value */}
      <div class="p-3">
        <div class="fa-lg text-center fw-bold lh-base" style={{ color: '#006b00' }}>
          <i class="fas fa-arrow-alt-circle-up"></i>
          &nbsp; Great Deal <br />
          $10 Above <br />
        </div>
        <div class="text-center fw-bold">FalconUp's Instant Market Value of $130</div>
      </div>

      <div class="p-3">
        <div class="fa-lg" style={{ color: '#009b00' }}>
          <i class="fas fa-arrow-alt-circle-up" style={{ transform: 'rotate(45deg)' }}></i>
          &nbsp; Good Deal
        </div>
        <div class="fa-lg" style={{ color: '#00bd00' }}>
          <i class="fas fa-arrow-alt-circle-up fa-rotate-90"></i>
          &nbsp; Fair Deal
        </div>
        <div class="fa-lg" style={{ color: '#ff8400' }}>
          <i class="fas fa-arrow-alt-circle-up" style={{ transform: 'rotate(135deg)' }}></i>
          &nbsp; High Price
        </div>
        <div class="fa-lg" style={{ color: '#f60000' }}>
          <i class="fas fa-arrow-alt-circle-up fa-rotate-180"></i>
          &nbsp; Overpriced
        </div>
        <div class="fa-lg">
          <i class="fas fa-times-circle" style={{ color: '#707070' }}></i>
          &nbsp; No Price Analysis
        </div>
        <div class="fa-lg">
          <i class="fas fa-exclamation-circle" style={{ color: '#707070' }}></i>
          &nbsp; No Price Analysis
        </div>
        <div class="fa-lg">
          <i class="fas fa-question-circle" style={{ color: '#707070' }}></i>
          &nbsp; Uncertain
        </div>
        <div> Price: $100 </div>
        Great Deal / Good Deal / Fair Deal / High Price / Uncertain / No Price Analysis $ 200 Below FalconUp's Instant
        Market Value of $130
      </div>

      <div class="p-3">
        {/* arrow color and risk value */}
        <div class="fa-lg align-middle" style={{ color: '#006b00' }}>
          <i class="fas fa-arrow-alt-circle-up"></i>
          &nbsp; Great Deal
        </div>
        <div class="fa-lg">
          <i class="fas fa-arrow-alt-circle-up" style={{ transform: 'rotate(45deg)', color: '#009b00' }}></i>
          &nbsp; Good Deal
        </div>
        <div class="fa-lg">
          <i class="fas fa-arrow-alt-circle-up fa-rotate-90" style={{ color: '#00bd00' }}></i>
          &nbsp; Fair Deal
        </div>
        <div class="fa-lg">
          <i class="fas fa-arrow-alt-circle-up" style={{ transform: 'rotate(135deg)', color: '#ff8400' }}></i>
          &nbsp; High Price
        </div>
        <div class="fa-lg">
          <i class="fas fa-arrow-alt-circle-up fa-rotate-180" style={{ color: '#f60000' }}></i>
          &nbsp; Overpriced
        </div>
        <div> Price: $100 </div>
        Great Deal / Good Deal / Fair Deal / High Price / Uncertain / No Price Analysis $ 200 Below FalconUp's Instant
        Market Value of $130
      </div>
    </>
  )
}
