import React from 'react';
import Grid from '@material-ui/core/Grid';
import BeerItem from './BeerItem'

export default ({list, onClick}) => {

  return (
    <Grid container spacing={2}>
      {
        list.map((beer)=>
          <BeerItem key={beer.id} beer={beer} onClick={() => onClick(beer)}/>
        )
      }
    </Grid>
  )
}

