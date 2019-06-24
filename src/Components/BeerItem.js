import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'; import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    maxWidth: 300
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const BeerItem = ({beer, onClick, hideClick}) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={4} className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            height='200'
            component='img'
            image={beer.image}
            alt={beer.name}
          />
          <CardContent>
            <Typography variant='h5'>{beer.name}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              R$ {beer.price.toFixed(2)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {
            hideClick ? null : (
              <Button size='small' color='primary' onClick={onClick}>
                Comprar
              </Button>
            )
          }
        </CardActions>
      </Card>
    </Grid>
  )
}

export default BeerItem
