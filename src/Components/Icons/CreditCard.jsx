import React from 'react'

function CreditCard({style}) {
    var {w,h,c} = style
  return (
    <svg
    width={w}
    height={h}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity={0.593634}
      d="M16 3.55556V1.18538C16 0.530459 15.4033 0 14.6667 0H1.33333C0.596667 0 0 0.530459 0 1.18538V3.55556H16Z"
      fill={c}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6.22217V12.0403C0 12.7547 0.596667 13.3333 1.33333 13.3333H14.6667C15.4033 13.3333 16 12.7547 16 12.0403V6.22217H0ZM7.33333 10.101H2.66667V8.80803H7.33333V10.101ZM10.6667 10.101H13.3333V8.80803H10.6667V10.101Z"
      fill={c}
    />
  </svg>
  )
}

export default CreditCard