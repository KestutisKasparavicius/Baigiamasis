import React from 'react'

export default function Stars({ value = 0, size = 18 }) {
  // value: 0..5 (can be decimal)
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const empty = 5 - full - (half ? 1 : 0)

  const starStyle = { color: '#f5b301', fontSize: size, marginRight: 2 }

  return (
    <span aria-label={`Rating ${value} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={'f'+i} style={starStyle}>★</span>
      ))}
      {half ? <span key="half" style={starStyle}>☆</span> : null}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={'e'+i} style={{ ...starStyle, color: '#ddd' }}>★</span>
      ))}
    </span>
  )
}
