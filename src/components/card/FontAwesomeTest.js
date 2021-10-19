import React from 'react'

/**
 * Font Awesome v5
 * https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons
CDN
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
 */
export default function FontAwesomeTest() {
  return (
    <div>
      <h2 class="page-header">Rotating Icons</h2>
      <div class="fa-2x">
        <i class="fas fa-arrow-alt-circle-up"></i>
        <i class="fas fa-arrow-alt-circle-up fa-rotate-90"></i>
        <i class="fas fa-arrow-alt-circle-up fa-rotate-180"></i>
        <i class="fas fa-arrow-alt-circle-up fa-rotate-270"></i>
        <i class="fas fa-arrow-alt-circle-up fa-flip-horizontal"></i>
        <i class="fas fa-arrow-alt-circle-up fa-flip-vertical"></i>
        <i class="fas fa-arrow-alt-circle-up fa-flip-both"></i>
        <i
          class="fas fa-arrow-alt-circle-up"
          style={{
            transform: 'rotate(45deg)',
            color: '#009b00'
          }}
        ></i>
        <i
          class="fas fa-arrow-alt-circle-up"
          style={{
            transform: 'rotate(135deg)',
            color: '#ff8400'
          }}
        ></i>
      </div>
      <hr />
      {/* Font Awesome Sample */}
      <div>
        <i class="fas fa-arrow-circle-up"></i>
        <i class="fas fa-camera"></i> <i class="fas fa-camera"></i> <i class="fab fa-aws"></i>
        <i class="fab fa-github-alt"></i>
      </div>
    </div>
  )
}
