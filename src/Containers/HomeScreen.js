import React, {Component} from 'react';
import './HomeScreen.css';
import Timer from './TimerContainer'
import api from '../Services/Api'
import BeerList from '../Components/BeerList'

const styles = {
  timer: {
    position: 'fixed',
    right: 20,
    bottom: 20
  }
}


class HomeScreen extends Component {
  state = {
    title: 'Beer Shop',
    availableCount: 10,
    beers: []
  }

  async componentDidMount() {
    const response = await api.getBeers()
    if (response.ok) {
      this.setState({
        beers: response.data
      })
      return
    }
    this.setState({
      mensagemErro: response.data.error
    })
  }

  render() {
    const {beers} = this.state
    const {history} = this.props
    return (
      <div className="HomeScreen">
        <div style={{height: 40}} />
        <BeerList
          onClick={beer => history.push(`/pedido/${beer.id}`)}
          list={beers}/>
      </div>
    );
  }
}

export default HomeScreen;
