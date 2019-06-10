import React from 'react'
import HomeScreen from './Containers/HomeScreen'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

const Pedido = ({match, history}) => (
  <div>
    <h1>Pedido Cerveja Id {match.params.beerId}</h1>
    <button onClick={() => history.goBack()}>Voltar</button>
  </div>
)

const Routes = () => (
  <div>
    <Router>
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/pedido/:beerId' exact component={Pedido} />
        <Route path='/pedido/info' exact render={(props) => <h1>Info</h1>} />
      </Switch>
    </Router>
  </div>
)

export default Routes
