import React from 'react'
import PropTypes from 'prop-types'
import './Title.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.main
  }
}))

function Title({name='', color, count=0}) {
  const classes = useStyles()
  return (
    <div className='Title'>
      <h1 className={classes.title}>{name}</h1>
      <small style={{color: count < 10? 'red' : color}}>Quantidade de cervejas restantes: {count}</small>
    </div>
  )
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number,
}

export default Title
