import React from 'react'

const SliderIcon = ({active, ...props}) => {
  return (
    <>
      {active ? (
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect y="3" width="17" height="4" rx="2" fill="#3AD78B" />
          <circle cx="14" cy="5" r="5" fill="#1FB86E" />
        </svg>
      ) : (
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <rect x="3" y="3" width="17" height="4" rx="2" fill="#C4C4C4" />
          <circle cx="5" cy="5" r="5" fill="#E0E0E0" />
        </svg>
      )}
    </>
  )
}

export default SliderIcon
