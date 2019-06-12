import {create} from 'apisauce'

const api = create({
  baseURL: 'http://localhost:3000/api',
})

export default {
  setToken: (token) => api.setHeader('AuthToken', token),
  getBeers: () => api.get('beers'),
  getBeer: (id) => api.get(`beers/${id}`),
  createBeer: (data) => api.post('beers', data),
}
