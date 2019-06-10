import React from 'react'


export default function Timer({countdown}) {
  const timerStyle = {
    height: 120,
    width: 120,
    borderRadius: 60,
    border: '1px solid gray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <div style={timerStyle}>
      <span>Faltam </span>
      <span> {countdown} segundos </span>
    </div>
  )
}
