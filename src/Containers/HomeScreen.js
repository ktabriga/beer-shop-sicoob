import React, {Component} from 'react';
import './HomeScreen.css';
import Title from '../Components/Title'
import Timer from './TimerContainer'
import Button from '@material-ui/core/Button'
import api from '../Services/Api'

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
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/api/beers')
    const data = await response.json()
    console.log(data)
    //try {
    //  const response = await api.getBeers()
    //  console.log(response)
    //} catch (e) {

    //}
  }

  render() {
    const {title, availableCount} = this.state
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
      </div>
    );
  }
}

export default HomeScreen;
