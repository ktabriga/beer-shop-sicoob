import React from 'react'
import PropTypes from 'prop-types'
import './Title.css'

function Title({name='', color, count=0}) {
  return (
    <div className='Title'>
      <h1 style={{ color }}>{name}</h1>
      <small style={{color: count < 10? 'red' : color}}>Quantidade de cervejas restantes: {count}</small>
    </div>
  )
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number,
}

export default Title
