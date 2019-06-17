import React from 'react'
import BeerItem from '../Components/BeerItem'
import api from '../Services/Api'


class PedidoScreen extends React.Component {
  state = {
    beer: null
  }
  async componentDidMount() {
    const {params: {beerId: id}} = this.props.match
    const response = await api.getBeer(id)
    if (response.ok) {
      this.setState({
        beer: response.data
      })
      return
    }
    alert(`Erro ao buscar beer com id ${id}`)
  }

  render () {
    const {beer} = this.state
    if (!beer) {
      return null
    }
    return (
      <BeerItem beer={beer} />
    )
  }
}

export default PedidoScreen
