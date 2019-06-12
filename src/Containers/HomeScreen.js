import React, {Component} from 'react';
import './HomeScreen.css';
import Title from '../Components/Title'
import Timer from './TimerContainer'
import Button from '@material-ui/core/Button'
import api from '../Services/Api'
import BeerList from '../Components/BeerList'

const styles = {
  timer: {
    position: 'absolute',
    right: 20,
    top: 20
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
    const {title, availableCount, beers} = this.state
    const {history} = this.props
    return (
      <div className="HomeScreen">
        <Title
          color='green'
          name={title}
          count={availableCount} />
        <Timer style={styles.timer}/>
        <Button onClick={() => history.push('pedido/20')}>
          Fazer pedido
        </Button>
        <div style={{height: 80}}></div>
        <BeerList list={beers}/>
      </div>
    );
  }
}

export default HomeScreen;
