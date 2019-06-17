import React from 'react'
import HomeScreen from './Containers/HomeScreen'
import PedidoScreen from './Containers/PedidoScreen'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    color: 'white'
  }
})


const Routes = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static" className={classes.appBar} color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Beer Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/pedido/:beerId' exact component={PedidoScreen} />
          <Route path='/pedido/info' exact render={(props) => <h1>Info</h1>} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes
