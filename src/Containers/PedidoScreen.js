import React, {useState, useEffect} from 'react'
import BeerItem from '../Components/BeerItem'
import api from '../Services/Api'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    paddingTop: 40,
    display: 'flex' ,
    justifyContent: 'center'
  },
  paper: {
    padding: 20,
    width: 600
  }
})


const PedidoScreen = ({match}) => {
  const [beer, setBeer] = useState()
  const [formData, setFormData] = useState({
    quantidade: '22',
    nome: ''
  })
  const classes = useStyles()

  const getBeer = async () => {
    const {params: {beerId: id}} = match
    const response = await api.getBeer(id)
    if (response.ok) {
      setBeer(response.data)
      return
    }
    alert(`Erro ao buscar beer com id ${id}`)
  }

  const handleChange = name => event => {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
  }

  useEffect(() => {
    getBeer()
  })

  if (!beer) {
    return null
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item>
            <BeerItem beer={beer} hideClick/>
          </Grid>
          <Grid item>
            <form onSubmit={handleSubmit}>
              <span>Quantidade</span>
              <input
                value={formData.quantidade}
                onChange={handleChange('quantidade')}
                type="number" style={{display: 'block'}}/>
              <span>Nome Completo</span>
              <input
                value={formData.nome}
                onChange={handleChange('nome')}
                type="text" style={{display: 'block'}}/>
              <span>Endereço</span>
              <input
                onChange={handleChange('endereco')}
                type="text" style={{display: 'block'}}/>
              <button type='submit'>Concluir</button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}


export default PedidoScreen
