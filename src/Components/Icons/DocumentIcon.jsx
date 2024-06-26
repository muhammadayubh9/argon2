import React from 'react'

function DocumentIcon({style}) {
    var {w,h,c} = style
    return (
        <svg
            width={w}
            height={h}
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity={0.603585}
                d="M13.0001 13.8667H11.8141V1.26061H1.7334V0H12.4071C12.7344 0 13.0001 0.282376 13.0001 0.630303V13.8667Z"
                fill={c}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.625926 3.46667H10.6407C10.9863 3.46667 11.2667 3.73846 11.2667 4.07334V14.9933C11.2667 15.3282 10.9863 15.6 10.6407 15.6H0.625926C0.280415 15.6 0 15.3282 0 14.9933V4.07334C0 3.73846 0.280415 3.46667 0.625926 3.46667ZM2.5037 12.5667H6.25926V11.3533H2.5037V12.5667ZM8.76296 10.14H2.5037V8.92667H8.76296V10.14ZM2.5037 7.71334H8.76296V6.50001H2.5037V7.71334Z"
                fill={c}
            />
        </svg>
    )
}

export default DocumentIcon